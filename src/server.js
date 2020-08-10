// servidor
const express = require("express");
const server = express();
const nunjucks = require("nunjucks");
// configuração do nunjucks (template engine)
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// configurar arquivos estáticos (css, scripts e imagens)
server
  // rotas da aplicação
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500);
