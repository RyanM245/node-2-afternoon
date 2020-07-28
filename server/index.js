const express = require("express");
const app = express();
const messages = require("./controllers/messages_controller");
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));
port = 3001;

app.post(`/api/messages`, messages.create);
app.get(`/api/messages`, messages.read);
app.put(`/api/messages/:id`, messages.update);
app.delete(`/api/messages/:id`, messages.delete);

app.listen(port, () => {
  console.log(`Maybe I'm running on ${port}. Maybe I'm not.`);
});
