import { Router } from "express";
import user from "./user";
import game from "./game";
import event from "./event";
import favourite from "./favourite";
import participant from "./participant";

const api = Router();

api.use("/user", user);
api.use("/game", game);
/*api.use("/event", event);
api.use("/favourite", favourite);
api.use("/participant", participant);
*/
export default api;
