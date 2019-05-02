# GatherGamers-Server

## Required setup

- `npm install`
- Create **.env** file for :
```
  PORT=SERVER_PORT
  IGDBKEY=YOUR_OWN_APIKEY
```
- Create **database/config.json** to configure local DB connection, like this one :
```
{
  "dev": {
    "driver": "mysql",
    "database": "gathergamers",
    "port": DATABASE_PORT,
    "username": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD",
  },
  "production": {
    "driver": "mysql",
    "database": "gathergamers",
    "port": DATABASE_PORT,
    "username": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD",
  }
}
```
  **_Note : Heroku is handling DB connection on itself, you simply have nothing to do_**
- `npm test`
- `npm start`

## APIs

### IGDB API Endpoints

| method       | endpoint                                                                              | description               |
|--------------|---------------------------------------------------------------------------------------|---------------------------|
| **GET**      | `https://igdb.github.io/api/endpoints/game/`                                          |                           |
| **GET**      | `https://api-v3.igdb.com/games/?fields=name,cover&order=popularity:desc&limit=50`     | lists 50 popular games    |
| **GET**      | `- https://api-v3.igdb.com/covers/gamecoverid?fields=url`                             | returns game cover url    |
| **GET**      | `- https://images.igdb.com/igdb/image/upload/t_720p/ey8ua9nd0zpedtlqlajx.jpg`         | returns game cover        |

### SERVER API Endpoints

| method       | endpoint     | description                               |
|--------------|--------------|-------------------------------------------|
| **GET**      | `/`          | welcome page with a list of all endpoints |
| **GET**      | `/games`     | lists 10 random games                     |
| **GET**      | `/cover/:id` | returns game cover data (like and url)    |
| **POST**     | `/initdatas` | populates database from IGDB API          |


## Deployed Server APP

https://gathergamers.herokuapp.com/
