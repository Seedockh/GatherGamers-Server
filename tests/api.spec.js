let request = require('supertest');
const api = require('../routes');
//const app = require('../server');

// TESTS THE API
describe('Testing the API', ()=>{

  test('API Router should be defined', () => {
    expect(api).toBeDefined();
  });
  test('API Router should be an object', () => {
    expect(typeof api).toBe("object");
  });

/*
  test('API root path should be accessible', async (done) => {
    request = request('http://localhost:3000/api');
    await request.get('/').expect(200,done);
    done();
  });
*/
})
