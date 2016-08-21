console.log("JS file is connected to HTML! Woo!")
// --- Define the Game-Board as variable ---
var gameboard = document.getElementById('game-board');

// --- Function thet Create Board of cards ---
var createBoard = function() {
	// --- Loop to create the cards ---
	for (var i=0; i<4; i++) {
		var nuCard = document.createElement('div');
		nuCard.className = 'card';
		gameboard.appendChild(nuCard);
	}
}

// Execute the create board
createBoard();





/* Initial Card Values */
var cardOne = "king";
var cardTwo = "king";
var cardThree = "Queen";
var cardFour = "Queen";

/* Equality between 2 cards */
if (cardTwo === cardFour) {
	alert("You found a match!!");
}
else {
	alert("Sorry, try again");
}