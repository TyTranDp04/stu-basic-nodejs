import express from "express"
import {dpRoadController} from '../controllers/dproad.js'

const router = express.Router();

router.get("/api/dproads", dpRoadController.get);
router.post("/api/dproads", dpRoadController.create);
router.patch("/api/dproads/:_id", dpRoadController.update);
router.delete("/api/dproads/:_id", dpRoadController.delete);
router.get("/api/dproads/:_id", dpRoadController.restore);

export default router;