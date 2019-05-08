import https from 'https';
const querystring = require('querystring');
const express = require('express');
const api = express();

// Send mail to specified email
api.post('/sendmail', (req,res)=> {
  const postdata = querystring.stringify({
    'from' : 'postmaster@sandboxd2f559ffef674d5e8813969f669c8e5d.mailgun.org',
    'to' : "'"+req.body.useremail+"'",
    'subject' : 'Hello',
    'text' : 'Testing some Mailgun awesomeness!'
  });

  const options = {
      auth: `api:${process.env.MAILGUN_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postdata)
      }
  };

  const mailrequest = https.request('https://api.mailgun.net/v3/sandboxd2f559ffef674d5e8813969f669c8e5d.mailgun.org/messages', options, (response) => {
    console.log("======= MAILGUN RESPONSE =======");
    console.log(`STATUS: ${response.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    response.on('end', () => {
      console.log('No more data in response.');
    });
  });

   mailrequest.on('error', (e) => console.error(`problem with request: ${e.message}`) )
   mailrequest.end();
})

module.exports = api;
