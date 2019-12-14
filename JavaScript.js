//The logical representation of the grid / table
class TTTgrid {
	constructor() { 
		this.grid = 0;   /* Just create this. Will be initialized later  */
		this.reset();
	}

	setCross(row, col) {
		if (this.grid[row][col] == 0) {
			this.grid[row][col] = 1;
		}
	}

	setCircle(row, col) {
		if (this.grid[row][col] == 0) {
			this.grid[row][col] = 2;
		}
	}

	getValue(row, col) {
		return this.grid[row][col];
	}

	checkRowsForWinner() {
		for (let row = 0; row < 3; row++) {
			if (this.grid[row][0] == this.grid[row][1] && this.grid[row][1] == this.grid[row][2] && 
				this.grid[row][0] > 0) {
				return this.grid[row][0];
			}
		}
		return 0;
	}

	checkColsForWinner() {
		for (let col = 0; col < 3; col++) {
			if (this.grid[0][col] == this.grid[1][col] && this.grid[1][col] == this.grid[2][col] &&
				this.grid[0][col] > 0) {
				return this.grid[0][col];
			}
		}
		return 0;	
	}

	checkDiagonalsForWinner() {
		if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] &&
			this.grid[0][0] > 0) {
			return this.grid[0][0];
		} else if (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0] &&
			this.grid[0][2] > 0) {
			return this.grid[0][2];
		}
		return 0;
	}

	checkWinner() {
		var winner = this.checkRowsForWinner();
		if(winner == 0) {
			winner = this.checkColsForWinner();
		} 
		if(winner == 0) {
			winner = this.checkDiagonalsForWinner()
		}

		if (winner == 0) {
			return "";
		} else if (winner == 1) {
			return "Cross";
		} else if (winner == 2) {
			return "Circle";	
		}
	}

	reset() {
		this.grid = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		]		
	}

}


logicalGrid = new TTTgrid();


function reset()
{
	logicalGrid.reset();
	location.reload();
}

function clicked(row, col)
{
	if (logicalGrid.getValue(row, col) != 0) {
		return;
	}

	var buttonName =  "button" + row + col;
	var clickedButtons = document.getElementsByName(buttonName);
	if( clickedButtons.length == 0) {
		return;
	}
	
	if (currentSymbol == "X") {
		currentRound++;
		/* update GUI first, then update logical representation */
		clickedButtons[0].setAttribute("value", currentSymbol)
		logicalGrid.setCross(row, col);
		currentSymbol = "O";
	} else if (currentSymbol == "O") {
		/* update GUI first, then update logical representation */
		clickedButtons[0].setAttribute("value", currentSymbol)
		logicalGrid.setCircle(row, col);
		currentSymbol = "X";
	}
	if (currentRound >= 3) {
		var winner = logicalGrid.checkWinner();
		if (winner != "") {
			var msg = "The winner is " + winner;
			alert(msg);
			reset();
		}
	}
}
 

/* A round starts if the player who starts (always symbol "X") sets a symbol.
   The first round will be identified as '1'
*/
var currentRound = 0;

var currentSymbol = "X";   /* X=cross, O = circle */


