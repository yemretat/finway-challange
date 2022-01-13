import express from "express";
import { Application } from "express";
import {port,environment} from "./config/config"
import RedisManager from "./data/caching/RedisManager";
import RedisMiddleware from "./middlewares/redis/RedisMiddleware";
import ServerIndex from "./routers/serverIndex"
import { unCoughtErrorHandler } from "./middlewares/error/errorHandler";
// Creating our server
const app: Application = express();
const PORT: number = parseInt(port)


// Init Redis Caching
export const redis = new RedisManager()

// Redis cache middleware
export const redisCacheMiddleware = new RedisMiddleware(redis.client);


const server: ServerIndex  = new ServerIndex(app)
//error-handler middleware
app.use(unCoughtErrorHandler);

export default app.listen(PORT, () => {
    console.log(
      `server is running http://localhost:${PORT} : ${environment}`
    );
  });
  