//let element = document.getElementById("test");
//element.addEventListener("click", newPage);
function newPage() {
    window.location.replace("https://www.google.com");
}
console.log("Hello");
let canvas= document.getElementById('canvas');
let context= canvas.getContext("2d");
//1st line
context.beginPath();
context.moveTo(0,0);
context.strokeStyle = "green";
context.lineTo(100, 500);
context.stroke();
//2nd line
context.beginPath();
context.moveTo(0,100);
context.lineTo(500, 1000);
context.strokeStyle = "red";
context.stroke();
//circle
var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();

function submit(){
    alert("form submitted");
    console.log("function called");
}
