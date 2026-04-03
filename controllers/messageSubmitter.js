// const { addMessage } = require("../db");
const db = require("../db/queries");

async function submitForm(req, res) {
  const { user, text } = req.body;
  db.addMessage(user, text);
  res.redirect("/");
}

module.exports = { submitForm };
