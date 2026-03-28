const { getAllMessages } = require("../db");

async function getMessages(req, res) {
  const messages = await getAllMessages();
  res.render("index", { messages });
}

module.exports = { getMessages };
