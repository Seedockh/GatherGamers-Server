const request = require('supertest');
const app = require('./routes/');

// TESTS THE SERVER
describe('Test the root path',()=>{
  test("GET method returns status code 200", ()=>{
    return request(app).get('/').then( response =>{
      expect(response.statusCode).toBe(200);
    });
  });
})
