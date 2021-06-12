const path = require('path');
const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});
const app = express();
const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
app.use(express.static(path.join(__dirname, 'build')));


app.get("*", (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});
server.listen(PORT, () => {
  console.log('Server is running');
});