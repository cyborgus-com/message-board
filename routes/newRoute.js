const express = require("express");
const router = express.Router();
const { submitForm } = require("../controllers/messageSubmitter");

router.post("/", submitForm);

module.exports = router;
