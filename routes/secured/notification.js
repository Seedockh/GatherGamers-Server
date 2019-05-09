import { Router } from "express";
import Notification from "../../database/models/notification";
import User from "../../database/models/user";
import Game from "../../database/models/game";
import Sequelize from 'sequelize';

const api = Router();

api.get('/', async(req,res)=> {
  const notifs = await Notification.findAll({});
  res.status(200).json({ data: { notifs } })
});

// Get all notifications for one user
api.get('/user/:userid', async(req, res) => {
  const notifs = await Notification.findAll({
    where: { UserId: req.params.userid }
  });
  res.status(200).json({ data: { notifs } })
});

// Get all notifications for one game
api.get('/game/:gameid', async(req, res) => {
  const notifs = await Notification.findAll({
    where: { GameId: req.params.gameid }
  });
  res.status(200).json({ data: { notifs } })
});

// Add a new notification for one user
api.post('/add', async(req, res) => {
  const { message, type, UserId } = req.body;
  try {
    const notification = new Notification ({ message, type, UserId });
    await notification.save();
    res.status(201).json({ data: { notification } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete game from User favourites
api.delete('/delete/:notifid', async (req, res) => {
  const event = await Notification.destroy({where:{id: req.params.notifid}})
  res.status(200).json('SUCCESS: Notification deleted.')
})

export default api;
