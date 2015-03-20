'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/memos', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/memos')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('should fail for invalid create request', function(done)
  {
    request(app)
    .post('/api/memos', {})
    .expect(500)
    .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});