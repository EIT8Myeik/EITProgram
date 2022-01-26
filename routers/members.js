const express = require("express");
const {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} = require("../controllers/members");
const router = express.Router();

router.route("/").get(getAllMembers).post(createMember);
router.route("/:id").get(getMember).patch(updateMember).delete(deleteMember);

module.exports = router;
