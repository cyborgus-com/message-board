const { addMessage } = require("../db");

async function submitForm(req, res) {
  const { user, text } = req.body;
  addMessage(user, text);
  res.redirect("/");
}

module.exports = { submitForm };
