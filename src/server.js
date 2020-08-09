const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "51012039213",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Daniele Santos",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "51012039213",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [3],
    time_from: [720],
    time_to: [1220],
  },
];

const express = require("express");
const server = express();

server
  .use(express.static("public"))
  .get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
  })
  .get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html");
  })
  .get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html");
  })
  .listen(5500);