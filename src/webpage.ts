import * as puppeteer from "puppeteer";
import {
  Browser,
  Page,
  PDFOptions,
  ScreenshotOptions,
  HTTPRequest,
  ResourceType,
} from "puppeteer";

interface WebPageSettings {
  enableJavaScript: boolean;
  allowRequests: ResourceType[];
  urlRegex: RegExp;
}

interface ImageOptions extends ScreenshotOptions {
  width?: number,
  height?: number
};

export class WebPage {

  /**
   * Types
   */
  browser: Browser;
  settings: WebPageSettings;
  page: Page;
  onLoad?: (page: Page) => void;
  errors: [string];

  /**
   * Constructor
   * @param browser 
   */
  constructor(browser: Browser) {
    this.browser = browser;
    this.settings = {
      enableJavaScript: false,
      allowRequests: ["document", "stylesheet", "image", "font"],
      urlRegex: /^((https?|file):\/\/|data:image\/.+;base64,)(.+)(\?(.+))?$/,
    };
  }

  /**
   * This initialises our web page, including safety mechanisms to prevent script
   * execution and so forth
   * @returns Promise
   */
  async init() {
    this.page = await this.browser.newPage();
    await this.page.setJavaScriptEnabled(this.settings.enableJavaScript);
    await this.page.setRequestInterception(true);
    this.page.on("request", (request: HTTPRequest) => {
      const type = request.resourceType();
      const url = request.url();
      if (this.settings.urlRegex.test(url)) {
        if (this.settings.allowRequests.includes(type)) {
          console.log(`Chromium allowed resource type ${type} to url ${url}`);
          request.continue();
        } else {
          console.log(`Chromium denied resource type ${type} to url (${url}`);
          request.abort();
        }
      } else {
        console.log(`Chromium denied url ${url} (resource type ${type})`);
        request.abort();
      }
    });
    return this;
  }

  /**
   * Load the given URL in a new page
   * @param url 
   * @returns 
   */
  async go(url: string) {
    // Create a page if needed
    if (!this.page) {
      await this.init();
    }

    // Navigate to the given URL
    await this.page.goto(url, {
      waitUntil: "networkidle2",
    });

    // If an onLoad is set, we bypass CSP just for that function
    if (this.onLoad) {
      await this.page.setBypassCSP(true);
      await this.onLoad(this.page);
      await this.page.setBypassCSP(false);
    }
    return this;
  }

  /**
   * Wrapper around Page.pdf in order to produce a PDF from the loaded page
   * @param options 
   * @returns 
   */
  async pdf(options: PDFOptions) {
    return await this.page.pdf(
      this.cleanPdfOptions(options)
    );
  }

  async screenshot(imageOptions: ImageOptions) {
    const {width = 1920, height = 1080, ...options} = imageOptions;
    this.page.setViewport({
      width,
      height,
    });
    return await this.page.screenshot(
      this.cleanScreenshotOptions(options)
    );
  }

  cleanScreenshotOptions(options: ImageOptions): ImageOptions {
    const defaultOptions: ImageOptions = {
      captureBeyondViewport: true,
      encoding: "binary",
      fullPage: false,
      omitBackground: false,
      quality: 100,
      type: "jpeg",
      width: 1920,
      height: 1080,
    }

    const cleansedOptions = Object.keys(options).reduce( (acc: any, key: any) => {
      const value = options[key];
      switch(key) {
        case "type":
          if(["jpeg","png", "webm"].includes(value)) {
            acc[key] = value;
          } else {
            console.warn(`Invalid ${key}:`, value, "Must be jpeg, png or webm");
          }
          break;
        
        case "quality":
          if(!isNaN(value) && value >=0 && value <= 100) {
            
          } else {

          }
          break;
        
        case "fullPage":
        case "omitBackground":
          if(value === true || value === false) {
            acc[key] = value;
          } else {
            console.warn(`Invalid ${key}:`, value, "Must be a boolean");
          }
          break;
        
          case "width":
          case "height":
            if(!isNaN(value) && value > 0) {
              acc[key] = value;
            } else {
              console.warn(`Invalid ${key}: must be either an integer greater than zero`);  
            }
            break;
          
          case "clip":
            const clip = Object.keys(options.clip).reduce( (acc:any, key:any) => {
              const value = options.clip[key];
              if(["width", "height"].includes(key)) {
                if(!isNaN(value) && value > 0) {
                  acc[key] = options.clip[key];
                } else {
                  console.warn(`Invalid clip: ${key} must be either an integer greater than zero`);  
                }
              } else if(["x", "y"].includes(key)) {
                if(!isNaN(value) && value >= 0) {
                  acc[key] = options.clip[key];
                } else {
                  console.warn(`Invalid clip: ${key} must be either an integer greater than or equal to zero`);  
                }
              } else {
                console.warn(`Invalid clip: ${key} is not one of top, bottom, left or right`);
              }
              return acc;
            }, {});
            if(Object.keys(clip).length == 4) {
              acc[key] = clip;
            }
            break;
      }
      return acc;
    }, defaultOptions);
    
    return cleansedOptions;
  }
  
  cleanPdfOptions (options) {
    const defaultOptions: PDFOptions = {
      scale: 1,
      printBackground: true,
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      preferCSSPageSize: true,
      landscape: false,
      format: "A4",
      width: 0,
      height: 0,
    };
  
    const cleansedOptions = Object.keys(options).reduce( (acc: any, key: any) => {
      const value = options[key];
      switch(key) {
        case "scale":
          if(!isNaN(value) && value >= 0.1 && value <= 2) {
            acc[key] = value;
          } else {
            console.warn(`Invalid ${key}:`, value, "Must be a number between 0.1 and 2");
          }
          break;
        
        case "printBackground":
        case "preferCSSPageSize":
        case "landscape":
          if(value === true || value === false) {
            acc[key] = value;
          } else {
            console.warn(`Invalid ${key}:`, value, "Must be a boolean");
          }
          break;
        
        case "margin":
          const margin = Object.keys(options.margin).reduce( (acc:any, key:any) => {
            if(["top","bottom","left","right"].includes(key)) {
              const value = options.margin[key];
              if(!isNaN(value) || (typeof value == "string" && value.match(/^[0-9]+(mm|cm|in)$/))) {
                acc[key] = options.margin[key];
              } else {
                console.warn(`Invalid margin: ${key} must be either an integer, or a string specifying mm, cm or in`);  
              }
            } else {
              console.warn(`Invalid margin: ${key} is not one of top, bottom, left or right`);
            }
            return acc;
          }, {});
          if(Object.keys(margin).length == 4) {
            acc[key] = margin;
          }
          break;

          case "format":
            if([ "A0", "A1", "A2", "A3", "A4", "A5", "A6", "Letter", "Tabloid", "Ledger", ].includes(value)) {
              acc[key] = value;
            } else {
              console.warn(`Invalid ${key}:`, value, "Must be one of A0, A1, A2, A3, A4, A5, A6, Legal, Tabloid or Ledger");
            }
            break;
          
          case "width":
          case "height":
            if(!isNaN(value) || (typeof value == "string" && value.match(/^[0-9]+(mm|cm|in)$/))) {
              acc[key] = value;
            } else {
              console.warn(`Invalid ${key}: must be either an integer, or a string specifying mm, cm or in`);  
            }
            break;             
      }
      return acc;
    }, defaultOptions);

    if(cleansedOptions.width == 0 || cleansedOptions.height == 0 ) {
      delete cleansedOptions.width;
      delete cleansedOptions.height;
    } else {
      delete cleansedOptions.format;
    }

    return cleansedOptions;
  };
  
}