var ROWS = 32;
var COLS = 32;

var ROWSTART = 0;
var COLSTART = 0;

//
//создает игровое поле
//
function createMatrix() {
  var matrix = document.getElementById('matrix');
  var n = ROWS * COLS;
  for (var i = 0; i < n; i++) {
    var div = document.createElement('div');
    div.className = 'cell';
    matrix.appendChild(div);
  }
}

//
//возвращает div (ячейку)
//
function getCell(row,col) {
  var index = col+row*COLS;
  var cell = document.getElementById('matrix').children[index];
  return cell;
}

//
//устанавливает значение ячейки (закарашена или нет)
//
function setCellValue(row,col,val) {
  var cell = getCell(row,col);
  cell.style.backgroundColor = (val == true) ? 'blue' : 'inherit';
}

//
//возвращает состояние ячейки (закрашена или нет)
//
function getCellValue(row,col) {
  var cell = getCell(row,col);
  var cellColor = cell.style.backgroundColor;
  return cellColor == 'blue';
}



window.onload = function() {
  createMatrix();
  setCellValue(0,2,true);
  console.log(getCellValue(0,2));
}
