import app from "../../server"
import chai from "chai";
import chaiHttp from "chai-http";
import { assert } from "chai";

//Assertion Style
chai.should();
chai.use(chaiHttp);

describe("testing the API endpoints in terms of status status message and content type", () => {
  it("Should return the correct status", (done) => {
    chai
      .request(app)
      .get("/api/?language=en&sortBy=publishedAt&totalDisplayed=10&q=tesla")
      .end((err, response) => {
        assert.equal(Object.keys(response.body)[0],"status")
        assert.equal(Object.keys(response.body)[1],"totalResults")
        assert.equal(Object.keys(response.body)[2],"articles")
        response.should.have.status(200);
        response.should.have.header(
          "content-type",
          "application/json; charset=utf-8"
        );
        done();
      });
  });
});

describe("testing the API endpoints in terms of errors", () => {
    it("Should return the correct error message when sort parameter false", (done) => {
      chai
        .request(app)
        .get("/api/?language=en&sortBy=publishedAtW&totalDisplayed=10&q=tesla")
        .end((err, response) => {
          assert.equal(Object.keys(response.body)[0],"success")
          assert.equal(Object.keys(response.body)[1],"message")
          assert.equal(Object.values(response.body)[1],"Please give the correct sort param")
          response.should.have.status(400);
          response.should.have.header(
            "content-type",
            "application/json; charset=utf-8"
          );
          done();
        });
    });
    it("Should return the correct error message when sort parameter false", (done) => {
        chai
          .request(app)
          .get("/api/?language=en&sortBy=publishedAtW&totalDisplayed=10&q=tesla")
          .end((err, response) => {
            assert.equal(Object.keys(response.body)[0],"success")
            assert.equal(Object.keys(response.body)[1],"message")
            assert.equal(Object.values(response.body)[1],"Please give the correct sort param")
            response.should.have.status(400);
            response.should.have.header(
              "content-type",
              "application/json; charset=utf-8"
            );
            done();
          });
      });
   
  });
