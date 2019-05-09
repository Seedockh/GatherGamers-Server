# GatherGamers-Server

## CREW
| name | role |
|------|------|
| Adrien Masson | **Client-side** : creating the screens |
| Antoine Nivoy | **Client-side** : client->server connexion |
| Maxime Gouénard | **Both sides** : API routes + client->server connexions |
| Pierre Hérissé | **Server side** : Database + API Routes |

## LOCAL SETUP

- `npm install`
- Create **.env** file for :
```conf
  NODE_ENV=dev
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

---

## APIs

### IGDB API Endpoints

| method       | endpoint                                                                              | description               |
|--------------|---------------------------------------------------------------------------------------|---------------------------|
| **GET**      | `https://igdb.github.io/api/endpoints/game/`                                          |                           |
| **GET**      | `https://api-v3.igdb.com/games/?fields=name,cover&order=popularity:desc&limit=50`     | lists 50 popular games    |
| **GET**      | `- https://api-v3.igdb.com/covers/gamecoverid?fields=url`                             | returns game cover url    |
| **GET**      | `- https://images.igdb.com/igdb/image/upload/t_720p/ey8ua9nd0zpedtlqlajx.jpg`         | returns game cover        |

---

### SERVER API Endpoints

- **LOCAL IGDB ENDPOINTS**

| method       | endpoint              | description                                                 |  auth |
|--------------|-----------------------|-------------------------------------------------------------|-------|
| **GET**      | `/api/igdb`           | welcome page with a list of all endpoints                   | none  |
| **GET**      | `/api/igdb/games`     | lists 10 random games                                       | none  |
| **GET**      | `/api/igdb/cover/:id` | returns game cover data (like and url)                      | none  |
| **POST**     | `/api/igdb/initdatas` | populates database from IGDB API                            | none  |

---

- **AUTH ENDPOINT**

| method       | endpoint              | body                                                        |  auth |
|--------------|-----------------------|-------------------------------------------------------------|-------|
| **POST**     | `/api/auth/register ` | body : { nickname, email, password, password_confirmation } | none  |
| **POST**     | `/api/auth/login`     | body : { email, password }                                  | token |

---

- **USER ENDPOINT**

| method       | endpoint                       | body                                                              |  auth |
|--------------|--------------------------------|-------------------------------------------------------------------|-------|
| **GET**      | `/api/user/`                   |                                                                   | token |
| **GET**      | `/api/user/:id`                |                                                                   | token |
| **PUT**      | `/api/user/update/:id`         | body : { nickname, email, token }                                 | token |
| **PUT**      | `/api/user/updatepassword/:id` | body : { old\_password, password, password\_confirmation, token } | token |
| **DELETE**   | `/api/user/delete/:id`         | body : { token }                                                  | token |

---

- **GAME ENDPOINT**

| method       | endpoint                       | body                                                              |  auth |
|--------------|--------------------------------|-------------------------------------------------------------------|-------|
| **GET**      | `/api/game/`                   |                                                                   | token |
| **GET**      | `/api/game/:id`                |                                                                   | token |
| **DELETE**   | `/api/game/delete/:id`         | body : { token }                                                  | token |

---

- **EVENT ENDPOINT**

| method       | endpoint                        | body                                                              |  auth |
|--------------|---------------------------------|-------------------------------------------------------------------|-------|
| **GET**      | `/api/event/`                   |                                                                   | token |
| **GET**      | `/api/event/game/:gameid`       | _Display all events about one game_                               | token |
| **GET**      | `/api/event/user/:userid`       | _Display all events created by one user_                          | token |
| **GET**      | `/api/event/:id`                | _Display one event_                                               | token |
| **POST**     | `/api/event/create`             | body : { name, place, date, UserId, GameId }                      | token |
| **PUT**      | `/api/event/update/:id`         | body : { name, place, date }                                      | token |
| **DELETE**   | `/api/event/delete/:id`         |                                                                   | token |

---

- **FAVOURITE ENDPOINT**

| method       | endpoint                                   | body                                                       |  auth |
|--------------|--------------------------------------------|------------------------------------------------------------|-------|
| **GET**      | `/api/favourite/user/:userid`              | _Display all favourite games for one user_                 | token |
| **POST**     | `/api/favourite/add`                       | body : { UserId, GameId }                                  | token |
| **DELETE**   | `/api/favourite/delete/:userid/:gameid`    | _Delete Game from User favourites_                         | token |

---

- **PARTICIPANT ENDPOINT**

| method       | endpoint                                   | body                                                       |  auth |
|--------------|--------------------------------------------|------------------------------------------------------------|-------|
| **GET**      | `/api/participant/event/:eventid`            | _Display all users for one event_                          | token |
| **POST**     | `/api/participant/add`                     | body : { UserId, EventId }                                 | token |
| **DELETE**   | `/api/participant/delete/:eventid/:userid` | _Delete user from an Event participants_                   | token |

---

- **MAILING ENDPOINT with MailGun**

| method       | endpoint                                   | body                                                       |  auth |
|--------------|--------------------------------------------|------------------------------------------------------------|-------|
| **POST**     | `/api/mailgun/register`                    | body : { useremail } // who will receive email             | none  |

---

## RESOURCES

| name           | url                                                     |
|:--------------:|:-------------------------------------------------------:|
| Papertrail     | https://papertrailapp.com/systems/gathergamers/events   |
| JawsDB MySQL   | https://dashboard.jawsdb.com/mysql/dashboard            |
| SendGrid       | https://app.sendgrid.com/                               |
| CircleCI       | https://circleci.com/gh/Seedockh/GatherGamers-Server    |

## DEPLOYED SERVER APP

https://gathergamers.herokuapp.com/
