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

function arrowListener() {
  setCellValue(row,col,false);
  if (event.keyCode == 37) {
    col--;
  } else if (event.keyCode == 38) {
    row++;
  } else if (event.keyCode == 39) {
    col++;
  } else if (event.keyCode == 40) {
    row--;
  }
  setCellValue(row,col,true);
}

function play() {
  var row = 0;
  var col = 0;
  setCellValue(row,col,true);
  addEventListener('keydown', function(event) {
    setCellValue(row,col,false);
    if (event.keyCode == 37) {
      if (col!=0) {
        col--;
      } else {
        col=COLS - 1;
      }
    } else if (event.keyCode == 38) {
      if (row !=0) {
        row--;
      } else {
        row = ROWS - 1;
      }
    } else if (event.keyCode == 39) {
      if (col != COLS - 1) {
        col++;
      } else {
        col = 0;
      }
    } else if (event.keyCode == 40) {
      if (row != ROWS - 1){
        row++;
      } else {
        row = 0;
      }
    }
    setCellValue(row,col,true);
  });
}


window.onload = function() {
  createMatrix();
  play();

}
