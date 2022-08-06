import { randomUUID } from "crypto";
import { Request, Response } from "express";
import * as puppeteer from "puppeteer";
import { Browser, Page, PDFOptions, ScreenshotOptions } from "puppeteer";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import { UploadedFile } from "express-fileupload";
import { WebPage } from "./webpage";

/**
 * Chromium Class
 *
 * @class Chromium
 * @description This class wraps the functionality of Chromium
 */
export class Chromium {
  // Types
  _log: (...args: any) => void;
  _browser: Browser;

  constructor(
    logFunction: (...any) => void = (...args: any) => {
      console.log(...args);
    }
  ) {
    this._log = logFunction;
  }

  async start() {
    // Start up chrome and open a browser tab
    this._browser = await puppeteer.launch({
      headless: true,
      // args: ["--no-sandbox"], // Ideally this should not be used!
    });
  }

  async getPdf(url: string, options: PDFOptions) {
    const webPage = new WebPage(this._browser);
    const pdf = await (await webPage.go(url)).pdf(options);
    await webPage.page.close();
    return pdf;
  }

  async getImage(url: string, options: ScreenshotOptions) {
    const webPage = new WebPage(this._browser);
    const jpeg = await (await webPage.go(url)).screenshot(options);
    await webPage.page.close();
    return jpeg;
  }

  async stop() {
    await this._browser.close();
  }

  /**
   * Respond to a request for a file
   *
   * @param promise - A promise that should resolve to a buffer containing the file contents
   * @param response - The response object to use in order to return the response
   * @param contentType - The MIME type of the response
   * @param filename - The filename of the response
   * @param cleanup - A function that is always run after success or failure
   */
  fileResponse(
    promise: Promise<String|Buffer>,
    response: Response,
    contentType: string,
    filename: string,
    cleanup : () => void = () => {}
  ) {
    promise
      .then((buffer: Buffer) => {
        response.status(200);
        response.setHeader(
          "Content-disposition",
          `attachment; filename=${filename}`
        );
        response.setHeader("Content-type", contentType);
        response.send(buffer);
      })
      .catch((error: Error) => {
        response.status(400);
        response.send({
          error: error.message,
        });
      }).finally(cleanup);
  }

  /**
   * Parse a reqquest to generate a file from a given URL
   * This request should have a JSON body
   * 
   * @param request 
   * @param callback 
   */
  parseUrlRequest(
    request: Request,
    callback: (body: any) => void
  ) {
    const body = request.body.url ? request.body : request.query;
    callback(body);
  }

  /**
   * Parse a request to generate a file from an uploaded
   * file. This request should have URL-encoded mutlipart form
   * @param request 
   * @param callback 
   * @param failure 
   */
  parseFileRequest(
    request: Request,
    callback: (params: any) => void,
    failure: () => void
  ) {
    const { params } = request;
    const tempDirectory = os.tmpdir();
    const filename = path.join(tempDirectory, `${randomUUID()}.html`);
  }

  /**
   * This function is called from express to return a PDF
   * from a given json body (url mode)
   * @param request 
   * @param response 
   */
  pdfUrlRequest(request: Request, response: Response) {
    this.parseUrlRequest(request, (body) => {
      const { url, options = {}, filename = null } = body;
      this.fileResponse(
        this.getPdf(url, options),
        response,
        "application/pdf",
        filename ?? `${randomUUID()}.pdf`
      );
    });
  }

  /**
   * This function is called from express to return a JPEG
   * from a given json body (url mode)
   * @param request 
   * @param response 
   */
  imageUrlRequest(request: Request, response: Response) {
    this.parseUrlRequest(request, (body) => {
      const { url, options = {}, filename = null } = body;
      const {type = "jpeg"} = options;
      this.fileResponse(
        this.getImage(url, options),
        response,
        `image/${type}`,
        filename ?? `${randomUUID()}.${type}`
      );
    });
  }

  pdfFromFile(request: Request, response: Response) {
    const { options = {} } = request.params;
    const tempDirectory = os.tmpdir();
    const filename = path.join(tempDirectory, `randomUUID()}.html`);
    if (!request.files || !request.files.file) {
      response.status(400);
      response.send({
        error: "No file given",
      });
    } else {
      const file = request.files.file as UploadedFile;
      file.mv(filename);
      console.log(`${filename} created`);
      this.getPdf(`file://${filename}`, options)
        .then((buffer: Buffer) => {
          response.status(200);
          response.setHeader(
            "Content-disposition",
            `attachment; filename=${randomUUID()}.pdf`
          );
          response.setHeader("Content-type", "application/pdf");
          response.send(buffer);
        })
        .catch((error: Error) => {
          response.status(400);
          response.send({
            error: error.message,
          });
        })
        .finally(() => {
          fs.unlink(filename, (err) => {
            if (err) {
              throw err;
            }
            console.log(`${filename} deleted`);
          });
        });
    }
  }
}

export default Chromium;
