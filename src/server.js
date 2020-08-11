// servidor
const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, SaveClasses } = require("./pages");

// configuração do nunjucks (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// configurar arquivos estáticos (css, scripts e imagens)
server
  // receber os dados da req.body
  .use(express.urlencoded({ extended: true }))
  // rotas da aplicação
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", SaveClasses)
  .listen(5500);
