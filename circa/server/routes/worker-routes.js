const express = require("express");
const {
  worker,
  getAllworker,
  getWorkerById,
  unliveworker,
  pricing
} = require("../controllers/worker-controller");

const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/worker", verifyToken, worker);
router.get("/unlive", verifyToken, unliveworker);
router.get("/allworker",getAllworker)
router.get("/workerdetail/:id",getWorkerById)
router.post("/pricing",pricing)

module.exports = router;
