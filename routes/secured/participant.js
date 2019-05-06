import { Router } from "express";
import Participant from "../../database/models/participant";
import User from "../../database/models/user";
import Event from "../../database/models/event";
import Sequelize from 'sequelize';

const api = Router();

// Get all users for one event
api.get('/event/:eventid', async(req, res) => {
  const participants = await Event.findOne({
    where: { id: req.params.eventid },
    attributes: ['name','date','place'],
    include: [{
      model: User,
      attributes: ['nickname','email','city'],
      through: { attributes: [] }
    }]
  });
  res.status(200).json({ data: { participants } })
});

// Add a new participant to an event
api.post('/add', async(req, res) => {
  const { UserId, EventId } = req.body;
  try {
    const participant = new Participant ({
      UserId,
      EventId
    });
    await participant.save();
    res.status(201).json({ data: { participant } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

export default api;
