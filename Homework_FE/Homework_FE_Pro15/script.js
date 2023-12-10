const canvas = document.querySelector("#myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
});
const ctx = canvas.getContext("2d");

function Smile() {
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(85, 85, 8, 0, Math.PI * 2);
  ctx.arc(115, 85,8, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();


  ctx.beginPath();
  ctx.arc(100, 100, 30, 0, Math.PI);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.stroke();
}

Smile();