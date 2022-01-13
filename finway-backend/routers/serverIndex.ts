import morgan from "morgan";
import { Application } from "express";
import bodyParser from "body-parser";
import Routes from "./index";
import logger from "../helpers/logger/logger";
export default class Server {
    constructor(app: Application) {
      this.config(app);
      new Routes(app);
    }
    public config(app: Application): void {
      app.use(morgan("tiny"));
      app.use(bodyParser.json());
    }
  }
process.on("beforeExit", function (err) {
  logger.error(JSON.stringify(err))
  logger.error(err);
});
