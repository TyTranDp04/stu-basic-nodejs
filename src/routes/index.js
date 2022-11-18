import express from "express"
import {DpRoadController} from '../controllers/dproad.js'

const router = express.Router();

router.get("/api/dproads", DpRoadController.get);
router.post("/api/dproads", DpRoadController.create);
router.patch("/api/dproads/:_id", DpRoadController.update);
router.delete("/api/dproads/:_id", DpRoadController.delete);
router.get("/api/dproads/:_id", DpRoadController.restore);

export default router;