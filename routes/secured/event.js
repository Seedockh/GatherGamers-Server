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

api.delete('/delete/:id', async (req, res) => {
  const event = await Event.destroy({where:{id: req.params.id}})
  res.status(200).json('delete event')
})

export default api;
