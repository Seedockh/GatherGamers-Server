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
    attributes: ['id','name','date','place'],
    include: [{
      model: User,
      attributes: ['id','nickname','email','city'],
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
});

// Delete user from one Event participants
api.delete('/delete/:eventid/:userid', async (req, res) => {
  const event = await Participant.destroy({where:{UserId: req.params.userid, EventId: req.params.eventid}})
  res.status(200).json('SUCCESS: Participant deleted.')
})

export default api;
