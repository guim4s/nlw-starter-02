const { subjects, weekdays, getSubject } = require("./utils/format");

// funções para renderização das páginas utilizando o nunjucks
function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;
  const isNotEmpty = Object.keys(data).length != 0;

  data.subject = getSubject(data.subject);

  // Se tiver dados, adicionar
  if (isNotEmpty) {
    proffys.push(data);

    return res.redirect("/study");
  }

  // Se não tiver dados, apenas carregar a página novamente
  return res.render("give-classes.html", { subjects, weekdays });
}

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses,
};
