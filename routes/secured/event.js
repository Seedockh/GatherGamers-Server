import { Router } from "express";
import Event from "../../database/models/event";
import Sequelize from 'sequelize';

const api = Router();


// Display all Events
api.get("/", async (req, res) => {
  const events = await Event.findAll();
  res.status(200).json({ data: { events } });
});

// Display one event
api.get('/:id', async (req,res)=> {
  const event = await Event.findByPk(req.params.id);
  res.status(200).json(event);
})

// Create Event
api.post('/create', async(req, res) => {
  const {name, place, UserId, GameId} = req.body;
  try {
    const event = new Event({
      name,
      place,
      UserId,
      GameId
    });
    await event.save();
    res.status(201).json({ data: { event } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})


// Update Event
api.put('/update/:id', async (req,res)=> {
  Event.update(
    {
      name: req.body.name,
      place: req.body.place
    }, {where: {id: req.params.id},
    returning: true, plain: true
    }).then( response => {
      res.status(200).json({msg:'Game information updated successfully'})
    }).catch( err => {
      res.status(400).json({error: err})
    });
})

// Delete Event
api.delete('/delete/:id', async (req, res) => {
  const event = await Event.destroy({where:{id: req.params.id}})
  res.status(200).json('delete event')
})

export default api;
