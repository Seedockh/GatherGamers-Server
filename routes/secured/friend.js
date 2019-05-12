import { Router } from "express";
import Friend from "../../database/models/friend";
import User from "../../database/models/user";
import Sequelize from 'sequelize';

const api = Router();

// Get all friends of one user
api.get('/user/:userid', async(req, res) => {
  const favourite = await User.findOne({
    where: { id: req.params.userid },
    attributes: ['id','nickname','email','lastLocation'],
    include: [{
      model: User,
      attributes: ['id','nickname','email','lastLocation'],
      through: { attributes: [] }
    }]
  });
  res.status(200).json({ data: { favourite } })
});

// Add a new friend
api.post('/add', async(req, res) => {
  const { UserId, FriendId } = req.body;
  try {
    const friend = new Friend ({
      UserId,
      FriendId
    });
    await friend.save();
    res.status(201).json({ data: { friend } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Delete a friend
api.delete('/delete/:userid/:friendid', async (req, res) => {
  const userToFriend = await Friend.destroy({where:{UserId: req.params.userid, FriendId: req.params.friendid}})
  const friendToUser = await Friend.destroy({where:{UserId: req.params.friendid, FriendId: req.params.userid}})
  res.status(200).json('SUCCESS: Friend deleted.')
})

export default api;
