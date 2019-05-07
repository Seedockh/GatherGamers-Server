import { Router } from "express";
import passport from "passport";
import auth from "./auth";
import secured from "./secured";
import igdb from "./igdb";
import sendgrid from "./sendgrid";

const api = Router();

api.get("/", (req, res) => {
  res.status(200).json({
    name: "GatherGamers API",
    meta: {
      version: "1.0.0",
      status: "in dev"
    }
  });
});

api.use("/auth", auth);
api.use("/igdb",igdb);
api.use("/sendgrid",sendgrid);
api.use("/", passport.authenticate("jwt", { session: false }), secured);

export default api;
