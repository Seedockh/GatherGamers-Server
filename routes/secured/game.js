import { Router } from "express";
import Game from "../../database/models/game";
import Sequelize from 'sequelize';

const api = Router();

api.get("/", async (req, res) => {
  const games = await Game.findAll();
  res.status(200).json({ data: { games } });
});

api.get('/:id', async (req,res)=> {
  const game = await Game.findByPk(req.params.id);
  res.status(200).json(game);
})

export default api;
