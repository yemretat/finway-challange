import { DataError, SortParamError } from "../error/CustomError"
import { LinkBuildHelper } from "../utils/LinkBuildHelper"
import BaseHelpers from "./BaseHelpers"
import { Request, NextFunction,Response } from "express";
import Constants from "../constant/ConstantConfig";
import { QueryResponse, webUrlType } from "../../data/types/LinkTypes";
import axios from "axios"

export default class NewsMiddlewareHelpers extends BaseHelpers{

    sortByHelper(sortBy:string) :boolean{

        const sortByOptions= ["relevancy" ,"popularity","publishedAt"]
        if(sortByOptions.indexOf(sortBy) === -1){
            return false
        }
        return true;
    }
    languageHelper(language:string): boolean {
        const languageParams = ["all","ar","de","en","es","fr","he","it","nl","no","pt","ru","se","ud","zh"]
        if(language && languageParams.indexOf(language) === -1){
            return false
        }
        return true
    }
    async getAllData(req:Request,res:QueryResponse,next:NextFunction){
        const {language,sortBy="publishedAt",totalDisplayed,q} = req.query;
        var linkBuilderHelper = new LinkBuildHelper()
        const page:string = this.getPaginatorVariable(totalDisplayed as string)
        linkBuilderHelper.addSearch(Constants.WEB_QUERY_PAGE,page)
        linkBuilderHelper.addSearch(Constants.WEB_QUERY_PAGESIZE,Constants.PAGE_SIZE)
        language && language !="all" && linkBuilderHelper.addSearch(Constants.WEB_QUERY_LANGUAGE,language as string)
        q == '' ? linkBuilderHelper.addSearch(Constants.WEB_QUERY_SEARCH,Constants.DEFAULT_SEARCH)  : linkBuilderHelper.addSearch(Constants.WEB_QUERY_SEARCH,q as string)
        linkBuilderHelper.addSearch(Constants.WEB_QUERY_SORT,sortBy as string)
        linkBuilderHelper.addSearch(Constants.WEB_QUERY_APIKEY,Constants.WEB_QUERY_APIVALUE)

        const newsApiLink:webUrlType = linkBuilderHelper.buildNewsApiLink()
        const allNews = await axios.get(newsApiLink)
        if(!allNews){
            next(new DataError())
        }
        res.advanceQueryResults = allNews.data
        next()
        
    }

    

}