import { Response } from "express";

export declare type webUrlType = `https://newsapi.org/v2/${string}`;

export interface QueryResponse extends Response {
    advanceQueryResults: any, // or any other type
    apiLink : string
  }