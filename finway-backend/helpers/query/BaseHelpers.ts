import { LinkBuildHelper } from "../utils/LinkBuildHelper"
import { Request, NextFunction,Response } from "express";
import Constants from "../constant/ConstantConfig";

export default abstract class BaseHelpers {
    abstract sortByHelper(sortBy:string):boolean;

    abstract languageHelper(language:string):boolean;

    abstract getAllData(req:Request,res:Response,next: NextFunction):any;
    
    public getPaginatorVariable(totalElement: string){
        const totalDisplayed = parseInt(totalElement) || 0;

        const paginationSize = Constants.PAGE_SIZE; 

        const page = totalDisplayed / parseInt(paginationSize)

        return String(page)      
    }
    
}