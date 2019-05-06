import { Router } from "express";
import Favourite from "../../database/models/favourite";
import User from "../../database/models/user";
import Game from "../../database/models/game";
import Sequelize from 'sequelize';

const api = Router();

// Get all favourites games for one user
api.get('/user/:userid', async(req, res) => {
  const favourite = await User.findOne({
    where: { id: req.params.userid },
    attributes: ['nickname','email','city'],
    include: [{
      model: Game,
      attributes: ['name','cover','summary'],
      through: { attributes: [] }
    }]
  });
  res.status(200).json({ data: { favourite } })
});

// Add a new participant to an event
api.post('/add', async(req, res) => {
  const { UserId, GameId } = req.body;
  try {
    const favourite = new Favourite ({
      UserId,
      GameId
    });
    await favourite.save();
    res.status(201).json({ data: { favourite } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

export default api;
