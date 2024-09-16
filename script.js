const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 5;
let color = "black";
let isPressed = false;
let x;
let y;

const sizeElement = document.getElementById("size");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const colorPicker = document.getElementById("color");
const clearBtn = document.getElementById("clear");

canvas.addEventListener("mousedown", (event) => {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener("mouseup", (event) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

colorPicker.addEventListener("change", (event) => {
  color = event.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
  sizeElement.innerText = size;
}
