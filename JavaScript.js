//The logical representation of the grid / table
class TTTgrid {
	constructor() {
		//init grid with zeros 
        this.grid = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		]
	}

	setCross(row, col){
		if (this.grid[row][col] == 0) {
			this.grid[row][col] = 1;
		}
	}

	setCircle(row, col){
		if (this.grid[row][col] == 0) {
			this.grid[row][col] = 2;
		}
	}

	getValue(row, col){
		return this.grid[row][col];
	}
}
  
logicalGrid = new TTTgrid();


function clicked(row, col)
{
	if (logicalGrid.getValue(row, col) != 0) {
		return;
	}

	var buttonName =  "button" + row + col;
	/* document.getEleme */
	var clickedButtons = document.getElementsByName(buttonName);
	if( clickedButtons.length == 0) {
		return;
	}
	if (currentSymbol == "X") {
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
}
 
var currentSymbol = "X";   /* X=cross, O = circle */

