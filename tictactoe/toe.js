// Class Board extends Array {
//     constructor(token) {
//         super(token, location);
//     }


// place(token, location) {
//     this.location = token;
// }

// }
// const board = new Board(9)



// let boardgame = Math.floor(Math.random() * 10)

// if (player1 === boardgame){
//     return this.location
// }
// if (this.location) {
//     return true
    
// }

// if (true) {
// console.log("pick another spot")
//  return null
// } else {

// }

// var cols = 3;
// var rows = 3;
// var dimCols, dimRows;
// var players = ['X', 'O'];
// var playerTurn = false;
// var table = [
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', '']
// ]
// var gameOver = false;

// function setup() {
//   createCanvas(600, 600);
//   dimCols = width / cols;
//   dimRows = height / rows;
// }

// function draw() {
//   background(175);
//   gridShow();
//   pointShow();

//   var result = checkWinner();

//   if (result != null) {
//     if (result == 'tie') {
//       textAlign(CENTER);
//       textSize(45);
//       fill(255, 0, 0);
//       text("Tie! \n press ENTER to play again.", width / 2, height / 2);
//     } else {
//       textAlign(CENTER);
//       textSize(45);
//       fill(255, 0, 0);
//       text("Player " + result + " win! \n press ENTER to play again.", width / 2, height / 2);
//     }
//     gameOver = true;
//   }
// }

// function keyPressed() {
//   if (keyCode === ENTER || keyCode === RETURN && gameOver) {
//     gameReset();
//   }
// }

// function mousePressed() {
//   var x, y;

//   if (playerTurn) {
//     for (var i = 0; i < cols; i++) {
//       for (var j = 0; j < rows; j++) {
//         x = i * dimCols;
//         y = j * dimRows;

//         if (mouseX > x && mouseX < x + dimCols && mouseY > y && mouseY < y + dimRows && table[i][j] == '') {
//           table[i][j] = 'O';
//           playerTurn = !playerTurn;
//           break;
//         }
//       }

//     }
//   } else {
//     for (var i = 0; i < cols; i++) {
//       for (var j = 0; j < rows; j++) {
//         x = i * dimCols;
//         y = j * dimRows;

//         if (mouseX > x && mouseX < x + dimCols && mouseY > y && mouseY < y + dimRows && table[i][j] == '') {
//           table[i][j] = 'X';
//           playerTurn = !playerTurn;
//           break;
//         }
//       }
//     }
//   }
// }

// function gameReset() {
//   table = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
//   ]

//   playerTurn = false;
// }

// function checkWinner() {
//   var playerWin = null;
//   var check = [false, false];

//   //Horizontal
//   for (var i = 0; i < rows; i++) {
//     if (table[i][0] == table[i][1] && table[i][1] == table[i][2] && table[i][0] != '' && table[i][1] != '' && table[i][2] != '') {
//       playerWin = table[i][0];
//       break;
//     }
//   }

//   //Vertical
//   for (var i = 0; i < cols; i++) {
//     if (table[0][i] == table[1][i] && table[1][i] == table[2][i] && table[0][i] != '' && table[1][i] != '' && table[2][i] != '') {
//       playerWin = table[0][i];
//       break;
//     }
//   }

//   //Diagonal
//   if (table[0][0] == table[1][1] && table[1][1] == table[2][2] && table[0][0] != '' && table[1][1] != '' && table[2][2] != '') {
//     playerWin = table[0][0];
//     check[0] = true;
//   } else if (table[0][2] == table[1][1] && table[1][1] == table[2][0] && table[0][2] != '' && table[1][1] != '' && table[2][0] != '') {
//     playerWin = table[1][1];
//     check[1] = true;
//   } else if (table[0][0] == '' || table[1][1] == '' || table[2][2] == '') {
//     check[0] = false;;
//   } else if (table[0][2] == '' || table[1][1] == '' || table[2][0] == '') {
//     check[1] = false;
//   } else {
//     check[0] = true;
//     check[1] = true;
//   }

//   if (playerWin == null && check[0] && check[1]) {
//     playerWin = 'tie';
//   }

//   return playerWin;
// }

// function pointShow(pos) {
//   var x;
//   var y;
//   var offset = 25;

//   for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {
//       x = i * dimCols;
//       y = j * dimRows;

//       if (table[i][j] == 'X') {
//         line(x + offset, y + offset, x + dimCols - offset, y + dimRows - offset);
//         line(x + offset, y + dimRows - offset, x + dimCols - offset, y + offset);
//       } else if (table[i][j] == 'O') {
//         noFill();
//         ellipse(x + dimCols / 2, y + dimRows / 2, dimCols - offset, dimRows - offset);
//       }
//     }
//   }
// }

// function gridShow() {
//   var x, y;

//   stroke(0);
//   strokeWeight(4);
//   for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {

//       x = i * dimCols;
//       y = j * dimRows;

//       line(x, y, x, y + dimRows);
//       line(x, y, x + dimCols, y);

//     }

//   }

// }



