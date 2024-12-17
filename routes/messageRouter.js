const { insertMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", insertMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
