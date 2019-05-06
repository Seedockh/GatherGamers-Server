import { Router } from "express";
import Event from "../../database/models/event";
import Sequelize from 'sequelize';

const api = Router();

api.get("/", async (req, res) => {
  const events = await Event.findAll();
  res.status(200).json({ data: { events } });
});

api.get('/:id', async (req,res)=> {
  const event = await Event.findByPk(req.params.id);
  res.status(200).json(event);
})

export default api;
