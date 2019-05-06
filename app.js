import express from 'express';
import bodyParser from 'body-parser';
import passport from "passport";
import cors from "cors";
import api from './routes/';

const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200).send("Please feel free to use our api with /api");
});

app.use("/api", api);

module.exports = app;
