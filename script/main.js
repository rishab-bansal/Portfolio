const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ws = new WebSocket('wss://example-app.onrender.com/ws')

ws.onopen = () => {
  ws.send('Hello from the client!')
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function funct(){
    document.getElementById("canvas").margin = 2;
}