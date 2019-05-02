import bodyParser from 'body-parser';
import mysql from 'mysql';
import app from './app';
import { db } from './database/initdb';
import User from './database/models/user'

const port = process.env.PORT;

User.sync({ force: false });
User.create({ user_email: "jack@gmail.com", user_password: "sparrow" }).then( res => {
  console.log("Jack's auto-generated ID:", res.id);
});

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
