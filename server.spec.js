const request = require('supertest');
const api = require('./routes/');

// TESTS THE SERVER
describe('Test the root path',()=>{
  test("GET method returns status code 200", ()=>{
    console.log(api);
    return request(api).get('/').then( response =>{
      expect(response.statusCode).toBe(200);
    });
  });
})
