const request = require('supertest');
// const { assert } = require('chai');
const app = require('../server/server');

describe('CROAK TESTS', () => {
  it('posts a new croak', done => {
    const newCroak = { text: 'new croak '};
    request(app)
      .post('/api/croaks')
      .send(newCroak)
      .expect(200)
      .end(done);
  });
});
