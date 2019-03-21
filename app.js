// stores number of squares available per game
var numSquares = 6;
// empty array contains random six or three times every new game
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 225, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)"
];
// color selected by user
var pickedColor;
// array of all squares available on page depending on options
var squares = document.querySelectorAll(".square");
// "new game" button
var resetButton = document.querySelector("#reset");
// array that contains "easy" and "hard" mod buttons
var modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
