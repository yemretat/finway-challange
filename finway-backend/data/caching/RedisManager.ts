import Logger from "../../helpers/logger/logger";
import { redisCache } from "../../config/config";
const redis = require("redis")


export default class RedisManager {
    client:any
    constructor() {
    this.client=redis.createClient({host:redisCache.host,port:redisCache.port})
    this.client.on('connect',function(){
        Logger.info(`Redis connection is successfull. Cache timeout is ${redisCache.cache_time} seconds`);
    })
    this.client.on('error',function(){
        Logger.error(`Redis connection is unsuccessfull`);
    })
  }
}