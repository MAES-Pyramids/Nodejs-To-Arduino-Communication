document.addEventListener("DOMContentLoaded", function () {
  var socket = io();

  document.getElementById("lightOn").addEventListener("click", function () {
    socket.emit("lights", { status: "1" });
  });

  document.getElementById("lightOff").addEventListener("click", function () {
    socket.emit("lights", { status: "0" });
  });
});
