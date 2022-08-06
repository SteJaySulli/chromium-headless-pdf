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

function cleanScreenshotOptions(options: ImageOptions): ImageOptions {
  const defaultOptions: ImageOptions = {
    captureBeyondViewport: false,
    encoding: "binary",
    fullPage: false,
    omitBackground: false,
    quality: 100,
    type: "jpeg",
  }
  return Object.assign({}, defaultOptions, options);
}

const cleanPdfOptions = (options) => {
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
  };

  if (
    options.landscape &&
    (options.landscape === "true" ||
      options.landscape === true ||
      options.landscape === 1 ||
      options.landscape === "1")
  ) {
    options.landscape = true;
  } else {
    options.landscape = false;
  }

  return Object.assign({}, defaultOptions, options);
};

export class WebPage {
  browser: Browser;
  settings: WebPageSettings;
  page: Page;
  onLoad?: (page: Page) => void;
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

  async pdf(options: PDFOptions) {
    return await this.page.pdf(
      cleanPdfOptions(options)
    );
  }

  async screenshot(imageOptions: ImageOptions) {
    const {width = 1920, height = 1080, ...options} = imageOptions;
    this.page.setViewport({
      width,
      height,
    });
    return await this.page.screenshot(
      cleanScreenshotOptions(options)
    );
  }

}