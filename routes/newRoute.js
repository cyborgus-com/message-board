const express = require("express");
const router = express.Router();
const { submitForm } = require("../controllers/messageSubmitter");

router.get("/new", submitForm);

module.exports = router;
