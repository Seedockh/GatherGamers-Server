import { Router } from "express";
import passport from "passport";
import auth from "./auth";
import secured from "./secured";
import igdb from "./igdb";

const api = Router();

api.get("/", (req, res) => {
  res.json({
    name: "GatherGamers",
    meta: {
      version: "1.0.0",
      status: "in dev"
    }
  });
});

api.use("/auth", auth);
api.use("/igdb",igdb);
api.use("/", passport.authenticate("jwt", { session: false }), secured);

export default api;
