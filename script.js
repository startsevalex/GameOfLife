
function createMatrix() {
  var matrix = document.getElementById('matrix');
  var n = 32 * 32;
  for (var i = 0; i < n; i++) {
    var div = document.createElement('div');
    div.className = 'cell';
    matrix.appendChild(div);
  }
}

function getCell(row,col) {
  var index = col+row*32;
  var cell = document.getElementById('matrix').children[index];
  return cell;
}

function setCellValue(row,col,val) {
  var cell = getCell(row,col);
  cell.style.backgroundColor = (val == true) ? 'blue' : 'inherit';
}

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
