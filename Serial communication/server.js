const express = require("express");
const http = require("http");
const SerialPort = require("serialport");
const parsers = SerialPort.parsers;
const socketIO = require("socket.io");
const path = require("path");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const parser = new parsers.Readline({ delimiter: "\r\n" });
const port = new SerialPort("COM5", {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});
port.pipe(parser);

const indexPath = path.join(__dirname, "web", "index.html");

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "web")));

// Route for serving the main HTML file
app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

function handleSocketConnection(socket) {
  console.log("We have a websocket connection 🔥");
  socket.on("lights", function (data) {
    console.log(data);
    port.write(data.status);
  });
}

io.on("connection", handleSocketConnection);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
