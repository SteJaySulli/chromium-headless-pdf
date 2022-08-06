import * as express from "express";
import * as fileUpload from "express-fileupload";
import registerRoutes from "./routes";
import Chromium from "./chromium";
import * as bodyParser from "body-parser";
import path = require("path");

const chromium = new Chromium((...args) => {
  console.log("CHROMIUM::", ...args);
});

const app = express();
app.use(fileUpload({ createParentPath: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.set("chromium", chromium);
app.set("page", (page) => path.join(__dirname,"..","src",'pages', page));
registerRoutes(app);

if (require.main === module) {
  chromium.start();
  const { PORT = 3000 } = process.env;
  const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

  const safeShutdown = (signal) => {
    console.log(`${signal} recieved, Shutting down...`);
    server.close(() => {
      chromium.stop().then(() => {
        console.log("Shutdown completed.");
      });
    });
  };

  process.on("SIGTERM", safeShutdown);
}

export default app;
