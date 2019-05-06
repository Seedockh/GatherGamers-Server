import { Router } from "express";
import User from "../../database/models/user";
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

const api = Router();

api.get("/", async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({ data: { users } });
});

api.get('/:id', async (req,res)=> {
  const user = await User.findByPk(req.params.id);
  res.status(200).json(user);
})

api.put('/update/:id', (req,res,next)=> {
  jwt.verify(req.body.token,process.env.SUPERSECRET, async (err,decoded) => {
      if (err) {
        res.status(400).json({ error: 'Token error : '+err.message });
      } else {
        User.update(
          { nickname: req.body.nickname,
            email: req.body.email,
            password: "fake_password",
            password_confirmation: "fake_password"
          }, { where : {id:req.params.id},
          returning: true, plain: true })
          .then( response => {
            res.status(200).json({msg:'User information updated successfully.'}) })
          .catch( err => {
            res.status(400).json({ error: err.original.detail })
          });
  	   }
  });

});

api.put('/updatepassword/:id', async (req,res,next)=> {
    jwt.verify(req.body.token,process.env.SUPERSECRET, async (err,decoded) => {
        if (err) {
          res.status(400).json({ error: 'Token error : '+err.message });
        } else {
          const old_user = await User.findByPk(req.params.id);
          if ((await old_user.checkPassword(req.body.old_password))) {
            old_user.update(
              { password: req.body.password,
                password_confirmation: req.body.password_confirmation,
              }, {
                where : {id:req.params.id},
              returning: true, plain: true })
            .then( response => {
              res.status(200).send({ msg: 'Password update done.'}) })
            .catch( err => {
              if (err.errors[0]) {
                res.status(400).json({ error: ''+err.errors[0].message});
              }
              if (err.original) {
                res.status(400).json({ error: ''+err.original.name+' : Can\'t update password for now.' });
              }
            });
          } else {
            res.status(400).json({ error: "Old password is incorrect." })
          }
    	}
    });

});

api.delete('/delete/:id', async (req,res)=> {
  jwt.verify(req.body.token,process.env.SUPERSECRET, async (err,decoded) => {
      if (err) {
        res.status(400).json({ error: 'Token error : '+err.message });
      } else {
        await User.destroy({where:{id: req.params.id}})
        .then( response => {
          res.status(200).json({msg: "User deleted successfully." }) })
        .catch( err => {
          res.status(400).json({ error: err.original.detail })
        });
      }
  });
})

export default api;
