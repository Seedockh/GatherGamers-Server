import { Router } from "express";
import user from "./user";
import game from "./game";
import event from "./event";
import favourite from "./favourite";
import participant from "./participant";
import notification from "./notification";
import friend from "./friend";

const api = Router();

api.use("/user", user);
api.use("/game", game);
api.use("/event", event);
api.use("/participant", participant);
api.use("/favourite", favourite);
api.use("/notification", notification);
api.use("/friend", friend);

export default api;
