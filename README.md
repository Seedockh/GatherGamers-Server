# GatherGamers-Server

## Required setup

### Server
- `npm install`
- Create **.env** file for DB connection and API Keys.
- `npm start`

## Links

### External IGDB API Endpoints
- https://igdb.github.io/api/endpoints/game/
- https://api-v3.igdb.com/games/?fields=name,cover&order=popularity:desc&limit=50
- https://api-v3.igdb.com/covers/gamecoverid?fields=url
- https://images.igdb.com/igdb/image/upload/t_720p/ey8ua9nd0zpedtlqlajx.jpg

### Internal API Endpoints

| method       | endpoint     | description                               |
|--------------|--------------|-------------------------------------------|
| **GET**      | `/`          | welcome page with a list of all endpoints |
| **GET**      | `/games`     | lists 10 random games                     |
| **GET**      | `/cover/:id` | returns game cover data (like and url)    |
| **POST**     | `/initdatas` | populates database from IGDB API          |


### Deployed API

https://gathergamers.herokuapp.com/
