import { Router } from "express";
import passport from "passport";
import auth from "./auth";
import secured from "./secured";
import igdb from "./igdb";
import steam from "./steam";
import mailgun from "./mailgun";

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
api.use("/steam",steam);
api.use("/mailgun",mailgun);
api.use("/", passport.authenticate("jwt", { session: false }), secured);

export default api;
