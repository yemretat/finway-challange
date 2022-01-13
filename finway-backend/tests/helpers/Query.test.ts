import { assert } from "chai";
import chai from "chai";
import NewsMiddlewareHelpers from "../../helpers/query/NewsMiddlewareHelpers"
import BaseHelpers from "../../helpers/query/BaseHelpers";

describe("testing the middleware helpers", () => {
    it("Should return the correct boolean in sortBy ", (done) => {
        const middlewareHelper:BaseHelpers = new NewsMiddlewareHelpers()
        const flag :boolean = middlewareHelper.sortByHelper("popularityy")
        assert.equal(flag,false)
        done()
    })
    it("Should return the correct boolean in popularity  ", (done) => {
        const middlewareHelper:BaseHelpers = new NewsMiddlewareHelpers()
        const flag :boolean = middlewareHelper.sortByHelper("popularityy")
        assert.equal(flag,false)
        done()
    })
})