// stores number of squares available per game
var numSquares = 6;
// empty array contains random six or three times every new game
var colors = [];
// color selected by user
var pickedColor;
// array of all squares available on page depending on options
var squares = document.querySelectorAll(".square");
// "new game" button
var resetButton = document.querySelector("#reset");
// array that contains "easy" and "hard" mod buttons
var modeButtons = document.querySelectorAll(".mode");
