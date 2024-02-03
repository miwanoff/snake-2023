// Настройка элемента холста canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// Ширина и высота canvas
let width = canvas.width;
let height = canvas.height;
// Устанавливаем счет по умолчанию = 0
let score = 0;

// Вычисляем ширину и высоту в ячейках
let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;

// Функция для рисования рамки
let drawBorder = function () {
  ctx.fillStyle = "Gray";
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

drawBorder();

let drawScore = function () {
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Рахунок: " + score, blockSize, blockSize);
};

drawScore();

let gameOver = function () {
  clearInterval(intervalId);
  ctx.font = "60px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Кінець гри", width / 2, height / 2);
};

//gameOver();

// Рисуем окружность
let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

//circle(200, 200, 10, true);

let Block = function (col, row) {
  this.col = col;
  this.row = row;
};

Block.prototype.drawSquare = function (color) {
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

Block.prototype.drawCircle = function (color) {
    let centerX = this.col * blockSize + blockSize / 2;
    let centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
  };

let sampleBlock = new Block(20, 20);
//sampleBlock.drawSquare("blue"); 
sampleBlock.drawCircle("green");
