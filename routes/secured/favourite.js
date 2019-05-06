import { Router } from "express";
import Favourite from "../../database/models/favourite";
import Sequelize from 'sequelize';

const api = Router();

// Get favourite Game(s)
api.get('/:id', async(req, res) => {
  const favourites = await Favourite.findAll({where:{UserId: req.params.id}});
  res.status(200).json({ data: { favourites } })
});

// Add favourite Game
api.post('/create', async(req, res) => {
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
