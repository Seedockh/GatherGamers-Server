import { Router } from "express";
import Participant from "../../database/models/participant";
import Sequelize from 'sequelize';

const api = Router();

api.get('/', async(req,res) => {
  const participants = await Participant.findAll();
  res.status(200).json({ data: {participants}})
});

export default api;
