import { Router } from "express";
import verifyToken from "../middleware/authMiddleware.js";
import {
   deleteEvidenceMitra,
   getEviden,
   insertEviden,
} from "../controllers/evidenceController.js";
const eviden = Router();

eviden.get("/eviden", getEviden);
eviden.post("/eviden/create", insertEviden);
eviden.delete("/eviden/:idEviden", deleteEvidenceMitra);

export default eviden;
