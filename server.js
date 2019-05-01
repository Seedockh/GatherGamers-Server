
import bodyParser from 'body-parser';
import mysql from 'mysql';
import app from './app';

const port = process.env.PORT;
const db_connection = mysql.createConnection({
  db_host: process.env.HOST,
  db_database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD
});

db_connection.connect( err =>{
  // To validate the test
  if (err) throw err;

  app.use(bodyParser.urlencoded({ extended: true }))

  app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  });
});
