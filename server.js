
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JARVIS SERVER IS ONLINE!");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({
      error: "Message vide"
    });
  }

  res.json({
    reply: "Bonjour ! Je suis Jarvis. Ton serveur fonctionne !"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Jarvis running on port " + PORT);
});
