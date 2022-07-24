const express = require("express");
const router = express.Router();
const {
  getUniversities,
  setUniversity,
  getUniversity,
  updateUniversity,
  deleteUniversity,
} = require("../controllers/universityController");

router.route("/").get(getUniversities).post(setUniversity);

router
  .route("/:id")
  .get(getUniversity)
  .patch(updateUniversity)
  .delete(deleteUniversity);

module.exports = router;
