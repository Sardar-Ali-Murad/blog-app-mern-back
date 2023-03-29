import express from "express";

let router = express.Router();

import {
  createWritter,
  getAllApprovedWritters,
  getAllWritterRequests,
  ApproveWritter,
  getSingleWritter,
} from "../controllers/writterController.js";

router.route("/").post(createWritter);
router.route("/writerId").get(getSingleWritter);
router.route("/approveWriter").get(getAllApprovedWritters);
// Belwo we need to the middelware
router.route("/writerRequests").get(getAllWritterRequests);
// Belwo we need to the middelware
router.route("/approveWriter").get(ApproveWritter);

export default router;