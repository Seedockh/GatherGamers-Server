import { Router } from "express";
import Topic from "../../database/models/topic"
import jwt from 'jsonwebtoken';

const api = Router();

api.get("/", async (req, res) => {
    const topics = await Topic.findAll();
    res.status(200).json({ data: { topics } });
});

api.get('/:id', async (req, res) => {
    const topics = await Topic.findByPk(req.params.id);
    res.status(200).json(topics);
})

api.get('/user/:userid', async (req, res) => {

    const users = await User.findAll({
        where: { UserId: req.params.userid }
    });

    const topics = [];

    const getTopics = await users.map(async user => {
        const topic = await Topic.findOne({ where: { id: user.TopicId } });
        await topics.push(topic.dataValues);
    });

    Promise.all(getTopics).then(() => {
        res.status(200).json({ data: { topics } })
    })
})


api.get('/user/:gameid', async (req, res) => {

    const games = await Game.findAll({
        where: { GameId: req.params.gameid }
    });

    const games = [];

    const getGames = await games.map(async user => {
        const game = await Game.findOne({ where: { id: user.GameId } });
        await games.push(game.dataValues);
    });

    Promise.all(getGames).then(() => {
        res.status(200).json({ data: { games } })
    })
})
