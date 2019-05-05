import express from "express";
import bodyParser from 'body-parser';
import mysql from 'mysql';
import api from './routes/';
import { db } from './database/initdb';
import passport from "passport";
import cors from "cors";
import "./middleware/passport";
import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';

iconv.encodings = encodings;
require('dotenv').config();
const port = process.env.PORT;
const app = express();

const start = async () => {
  try {
    if (process.env.NODE_ENV) {
      await db.sync({ force: false });
    } else {
      throw new Error('CONFIG ERROR : Please specify your NODE_ENV in an env file')
    }

    app.use(cors());
    app.use(passport.initialize());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());

    app.get("/", (request, response) => {
      response.send("Please feel free to use our api with /api");
    });

    app.use("/api", api);
  } catch (err) {
    console.log(err.message);
  }
};

start();

module.exports = app.listen(port, () => console.log(`Server running on port ${port}`));
