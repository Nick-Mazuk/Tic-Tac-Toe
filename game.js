var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
var winner;
var cells;
var xTurn = true; //true if x, false if white
var moves = 0;

var board = [[0,0,0],[0,0,0],[0,0,0]]; //1 if X, -1 if O

window.addEventListener("DOMContentLoaded",function(){onload();});

function onload() {
	a1 = document.getElementById("a1");
	a2 = document.getElementById("a2");
	a3 = document.getElementById("a3");
	b1 = document.getElementById("b1");
	b2 = document.getElementById("b2");
	b3 = document.getElementById("b3");
	c1 = document.getElementById("c1");
	c2 = document.getElementById("c2");
	c3 = document.getElementById("c3");
	winner = document.getElementById("winner");
	a1.addEventListener("click", function(){makeTurn("a1");});
	a2.addEventListener("click", function(){makeTurn("a2");});
	a3.addEventListener("click", function(){makeTurn("a3");});
	b1.addEventListener("click", function(){makeTurn("b1");});
	b2.addEventListener("click", function(){makeTurn("b2");});
	b3.addEventListener("click", function(){makeTurn("b3");});
	c1.addEventListener("click", function(){makeTurn("c1");});
	c2.addEventListener("click", function(){makeTurn("c2");});
	c3.addEventListener("click", function(){makeTurn("c3");});
	cells = [[a1,b1,c1],[a2,b2,c2],[a3,b3,c3]];
}

function displayBoard() {
	for(i = 0; i < cells.length; i++) {
		for(j = 0; j < cells[i].length; j++) {
			switch(board[i][j]) {
				case -1:
					cells[i][j].innerHTML = "O";
					break;
				case 1:
					cells[i][j].innerHTML = "X";
					break;
				default:
					cells[i][j].innerHTML = "";
			}
		}
	}
}

function makeTurn(cell) {
	if(moves >= 9) {
		board = [[0,0,0],[0,0,0],[0,0,0]];
		moves = 0;
		xTurn = true;
		winner.innerHTML = "";
	}
	var col = 0;
	if(cell.substring(0,1) == "b")
		col = 1;
	if(cell.substring(0,1) == "c")
		col = 2;
	if(board[parseInt(cell.substring(1,2)) - 1][col] == 0) {
		board[parseInt(cell.substring(1,2)) - 1][col] = xTurn ? 1 : -1;
		xTurn = xTurn ? false : true;
		moves++;
	}
	displayBoard();
	testWinner();
}

function testWinner() {
	if(moves < 3) {
		return false;
	}
	if((board[1][1] == board[0][0] && board[1][1] == board[2][2] ||
	   board[1][1] == board[1][0] && board[1][1] == board[1][2] ||
	   board[1][1] == board[2][0] && board[1][1] == board[0][2] ||
	   board[1][1] == board[2][1] && board[1][1] == board[0][1]) && board[1][1] != 0) { //checks all diagonals in relation to center
		winner.innerHTML = board[1][1] == 1 ? "X wins!" : "O wins!";
		moves = 9;
		return board[1][1];
	}
	if(board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] != 0) {
		winner.innerHTML = board[2][0] == 1 ? "X wins!" : "O wins!";
		moves = 9;
		return board[2][0];
	}
	if(board[2][0] == board[1][0] && board[2][0] == board[0][0] && board[2][0] != 0) {
		winner.innerHTML = board[2][0] == 1 ? "X wins!" : "O wins!";
		moves = 9;
		return board[2][0];
	}
	if(board[0][2] == board[0][1] && board[0][2] == board[0][0] && board[0][2] != 0) {
		winner.innerHTML = board[0][2] == 1 ? "X wins!" : "O wins!";
		moves = 9;
		return board[0][2];
	}
	if(board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] != 0) {
		winner.innerHTML = board[0][2] == 1 ? "X wins!" : "O wins!";
		moves = 9;
		return board[0][2];
	}
	if(moves == 9) {
		winner.innerHTML = "Draw";
		return 0;
	}
}