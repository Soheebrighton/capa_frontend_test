// // server.js
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults({ static: "./build" });

// // db.json를 조작하기 위해 lowdb를 사용
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// const adapter = new FileSync("db.json");
// const db = low(adapter);

// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares);

// // Add custom routes before JSON Server router
// server.delete("/todos/completed", (req, res) => {
//   // lowdb를 사용해서 db.json에서 completed: true인 todo를 제거
//   db.get("todos").remove({ completed: true }).write();

//   // todos를 응답
//   res.send(db.get("todos").value());
// });

// // Use default router
// server.use(router);

// server.listen(5000, () => {
//   console.log("JSON Server is running");
// });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

server.listen(port, () => {
  console.log("server is running");
});
