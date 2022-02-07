const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3000;

app.use(express.static("./cliente"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
