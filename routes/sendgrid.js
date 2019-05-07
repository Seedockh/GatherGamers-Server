const express = require('express');
const api = express();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const circularJson = require('circular-json');
const helper = require('sendgrid').mail;

// Send IGDB games to the Sequelize model "Game"
api.post('/sendone', (req,res)=> {
  const sg = require('@sendgrid/mail');
  sg.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'pierre.herisse@gmail.com',
    from: 'pierre.herisse@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  console.log("======= SENDGRID RESPONSE =======");

  sg.send(msg);
  console.log(msg);
  res.send(msg);
})

module.exports = api;
