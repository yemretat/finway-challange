import URI from "urijs";
import { webUrlType } from "../../data/types/LinkTypes";
import Constants from "../constant/ConstantConfig";

export class LinkBuildHelper {

    private linkBuilder: URI;
    constructor() {
        this.linkBuilder = new URI();
    }

    addSearch(searchKey: string, searchValue: string): LinkBuildHelper {
        this.linkBuilder.addSearch(searchKey, searchValue);
        return this;
    }
    buildNewsApiLink() : webUrlType{
        this.linkBuilder.protocol(Constants.WEB_PROTOCOL)
        this.linkBuilder.hostname(Constants.WEB_HOSTNAME)
        this.linkBuilder.pathname(Constants.WEB_PATH)
        return this.linkBuilder.href() as webUrlType
    }
}