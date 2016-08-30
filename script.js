
function createMatrix() {
  var matrix = document.getElementById('matrix');
  var n = 32 * 32;
  for (var i = 0; i < n; i++) {
    var div = document.createElement('div');
    div.className = 'cell';
    matrix.appendChild(div);
  }
}

function setCell(row,col,val) {
  var index = col+row*32;
  var cell = document.getElementById('matrix').children[index];
  cell.style.backgroundColor = (val == true) ? 'blue' : 'inherit';
}

function getCell(row,col) {
  var index = col+row*32;
  var cell = document.getElementById('matrix').children[index];
  var cellColor = cell.style.backgroundColor;
  return cellColor == 'blue';
}



window.onload = function() {
  createMatrix();
  setCell(0,2,true);
  console.log(getCell(0,1));
}
