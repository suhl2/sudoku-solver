//get input from the divs
//build sudoku grid from the divs
//check to see if grid is valid sudoku puzzle (ie, no doubles, no numbers greater than 9 or less than 1)
//get row
//get column
//get square
//go through each row, checking to see if 1 can be placed, then 2, etch
//then go through columns, then squares
//repeat until sudoku is solved
//if it runs through all rows, cols, and squares twice with no possible moves, declare puzzle unsolvable

console.log("hey, listen");

//DOM Selectors
const cells = document.getElementsByClassName("cell");
const cellInputs = document.getElementsByClassName("number-input");
const submitButton = document.getElementById("solve");
console.log(submitButton);

const gameState = {
    boardState: [[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],
                [[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],
                [[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]]]
};
const solvePuzzle = () => {

    const inputValue = cellInputs[0].value;
    cellInputs[0].value = "";
    cellInputs[0].style.display = "none";
    cells[0].innerText = `${inputValue}`;
    console.log(inputValue);
}
submitButton.addEventListener("click", solvePuzzle);

