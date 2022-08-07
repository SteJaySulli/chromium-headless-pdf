import { Application, Request, Response } from "express";
const { PORT = 3000 } = process.env;

export const registerRoutes = (app: Application) => {

const chromium = app.get("chromium");

const page = app.get("page");
  app.get("/", (req: Request, res: Response) => {
      res.sendFile(page("get-url.html"));
  });

  app.get("/script-test",(req: Request, res: Response) => {
    res.send('<html><body><div id="out">This is appearing because scripts have been prevented from running.</div><script>console.log("Testing script"); var el = document.getElementById("out"); el.innerHTML = "This is appearing because scripts have been allowed to run, and the text on the page has been changed by a script.";</script></body></html>');
  });
  
  app.get("/test-pdf", (req: Request, res: Response) => {
    res.sendFile(page("test-pdf.html"));
  });

  // app.get("/pdf/url", (request, response) => chromium.pdfUrlRequest(request, response));
  app.post("/pdf/url", (request, response) => chromium.pdfUrlRequest(request, response));
  // app.get("/image/url", (request, response) => chromium.imageUrlRequest(request, response));
  app.post("/image/url", (request, response) => chromium.imageUrlRequest(request, response));

};

export default registerRoutes;
