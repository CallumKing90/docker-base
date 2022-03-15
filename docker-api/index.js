const Koa = require("koa");
const cors = require("@koa/cors");
const books = require("./config/config.js").books;

const App = new Koa();

App.use(cors());

App.use((ctx) => {
  ctx.body = books;
});

App.listen(3000);
