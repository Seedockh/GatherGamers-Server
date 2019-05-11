import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/user";
import passport from "passport";

const api = Router();

api.post("/register", async (req, res) => {
  const { firstname, lastname, nickname, email, password, password_confirmation } = req.body;

  console.log(req.body);

  try {
    const user = new User({
      firstname,
      lastname,
      nickname,
      email,
      password,
      password_confirmation,
    });
    await user.save();
    const payload = { id: user.id, firstname, lastname, nickname, email };
    const token = jwt.sign(payload, process.env.SUPERSECRET);

    res.status(201).json({ data: { user }, meta: { token } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

api.post("/login", async (req, res) => {
  passport.authenticate("local", { session: false }, async (err, user) => {
    if (err) {
      res.status(400).json({
        error: { message: err }
      });
      return res.status(400);
    }

    const { id, nickname, email } = user;
    const payload = { id, nickname, email };
    const token = jwt.sign(payload, process.env.SUPERSECRET);
    res.status(200).json({ data: { user }, meta: { token } });
  })(req, res);
});

export default api;
