import { Router } from "express";
import Game from "../../database/models/game";
import Sequelize from 'sequelize';

const api = Router();

// Display all Games
api.get("/", async (req, res) => {
  const games = await Game.findAll();
  res.status(200).json({ data: { games } });
});

// Display one Game
api.get('/:id', async (req,res)=> {
  const game = await Game.findByPk(req.params.id);
  res.status(200).json(game);
})

// Delete one Game
api.delete('/delete/:id', async (req, res) => {
  const game = await Game.destroy({where:{id: req.params.id}})
  res.status(200).json('delete game')
})

export default api;
