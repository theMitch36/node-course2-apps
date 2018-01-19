const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('#Get/', () => {
    it('should return Hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('#Get/users', () => {
    it('should return users response', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Mitchell',
            age: 25
          });
        })
        .end(done);
    });
  });
});
