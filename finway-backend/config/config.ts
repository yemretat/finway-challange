import dotenv from "dotenv";
//Environment Variables
dotenv.config({ path: "./config/env/config.env" });

export const port = process.env.PORT || "5000";
export const environment = process.env.NODE_ENV || "development";

export const redisCache = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || "6379",
    cache_time :process.env.REDIS_CACHE_TIMEOUT || "3600"

  };