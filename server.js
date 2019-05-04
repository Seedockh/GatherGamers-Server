import express from "express";
import bodyParser from 'body-parser';
import mysql from 'mysql';
import api from './routes/';
import { db } from './database/initdb';
import passport from "passport";
import cors from "cors";

require('dotenv').config();
const port = process.env.PORT;

const start = async () => {
  console.log("========= STARTING SERVER ==============");
  try {
    if (process.env.NODE_ENV) {
      console.log("--- Calling db.sync");
      await db.sync({ force: false });
    }

    const app = express();

    app.use(cors());
    console.log("--- Initializing passport");
    app.use(passport.initialize());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());

    app.get("/", (request, response) => {
      response.send("Please feel free to use our api with /api");
    });

    app.use("/api", api);

    console.log("--- Calling app.listen");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
