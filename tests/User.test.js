const request = require("supertest");
const assert = require("assert");
const app=require('../index').app;

describe('Get friendscount', () => {
it("number of friends ", function(done){
    request(app)
        .get('/friendscount')
        .expect(200)
        .end(function(err, res) {
            if (err) {
                assert(false, err.message);
                return;
            }
            done();
        });
});
});

describe('Get popular', () => {
it("most popular users ", function(done){
    request(app)
        .get('/popular')
        .set('Accept','application/json')
        .send({ "email":"kirill@gmail.com", "password":"123456" })
        .expect(200)
        .end(function(err, res) {
            if (err) {
                assert(false, err.message);
                return;
            }
            done();
        });
});
});