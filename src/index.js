const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;


let canv = document.getElementById("game-canvas");
const ctx = canv.getContext('2d')
ctx.fillStyle = 'green';
ctx.fillRect(20, 10, 150, 100);

ctx.beginPath();      
ctx.moveTo(30, 50);   
ctx.lineTo(150, 50);  
ctx.lineTo(151, 75); 
ctx.lineTo(29, 50); 
ctx.stroke();
ctx.lineWidth = 200;          

console.log("hello");