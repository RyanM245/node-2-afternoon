let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const index = messages.findIndex((el) => el.id === +req.params.id);
    if (index === -1) {
      res.sendStatus(404);
    } else {
      messages[index].text = req.body.text;
      res.status(200).send(messages);
    }
  },
  delete: (req, res) => {
    const index = messages.findIndex((el) => el.id === +req.params.id);
    if (index === -1) {
      res.sendStatus(404);
    } else {
      messages.splice(index, 1);
      res.status(200).send(messages);
    }
  },
};
