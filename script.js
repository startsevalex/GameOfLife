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
  var index = col+row*4;
  var cell = document.getElementById('matrix').children[index];
  if (val == true) {
    cell.style.backgroundColor = '#2196F3';
  }
}

window.onload = function() {
  createMatrix();
  setCell(0,0,true);
}
