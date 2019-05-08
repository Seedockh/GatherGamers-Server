const request = require('request');
const express = require('express');
const api = express();

// Send mail to specified email
api.post('/sendmail', async (req,res)=> {
  const data = {
    from : 'pierre.herisse@gmail.com', // don't change this address unless you authorize it on mailgun settings
    to : `${req.body.useremail}`,
    subject : 'Hello',
    text : 'Testing some Mailgun awesomeness!'
  };

  await request.post({
    url: 'https://api.mailgun.net/v3/sandboxd2f559ffef674d5e8813969f669c8e5d.mailgun.org/messages', form: data },
  (error, response, body) => {
    const result = { error: error, status: response && response.statusCode, body: body };
    res.send(result);
  }).auth('api',`${process.env.MAILGUN_API_KEY}`);
})

module.exports = api;
