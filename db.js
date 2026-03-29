const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getAllMessages() {
  return messages.sort((a, b) => b.added - a.added);
}

function addMessage(user, text) {
  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });
}

module.exports = { getAllMessages, addMessage };
