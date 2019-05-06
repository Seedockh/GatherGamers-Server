# GatherGamers-Server

## LOCAL SETUP

- `npm install`
- Create **.env** file for :
```conf
  PORT=SERVER_PORT
  IGDBKEY=YOUR_OWN_APIKEY
  SUPERSECRET=secretphrase
```
- Create **MYSQL** database called `gathergamers`
```sql
CREATE DATABASE IF NOT EXISTS `gathergamers` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `gathergamers`;
```
- Create **database/config.json** to configure local DB connection, like this one :
```java
{
  "dev": {
    "dialect": "mysql",
    "database": "gathergamers",
    "port": 3306,
    "user": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD"
  }
}
```
  **_Note : Heroku is handling DB connection on itself, you simply have nothing to do for deployed connection_**
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

| method       | endpoint              | description                                                 |
|--------------|-----------------------|-------------------------------------------------------------|
| **GET**      | `/api/igdb`           | welcome page with a list of all endpoints                   |
| **GET**      | `/api/igdb/games`     | lists 10 random games                                       |
| **GET**      | `/api/igdb/cover/:id` | returns game cover data (like and url)                      |
| **POST**     | `/api/igdb/initdatas` | populates database from IGDB API                            |
|                                          USER ENDPOINT                                             |                  
| **POST**     | `/api/auth/register ` | body : { nickname, email, password, password_confirmation } |
| **POST**     | `/api/auth/login`     | body : { email, password } + AUTH : Bearer Token            |


## RESOURCES

| name           | url                                                     |
|:--------------:|:-------------------------------------------------------:|
| Papertrail     | https://papertrailapp.com/systems/gathergamers/events   |
| JawsDB MySQL   | https://dashboard.jawsdb.com/mysql/dashboard            |
| SendGrid       | https://app.sendgrid.com/                               |
| CircleCI       | https://circleci.com/gh/Seedockh/GatherGamers-Server    |

## DEPLOYED SERVER APP

https://gathergamers.herokuapp.com/
