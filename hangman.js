//	HANGMAN.JS

inquirer = require("inquirer");
listOfWords = require("./listOfWords.js");
constructor = require("./constructor.js");


var j = 0;
var string = listOfWords[j];

var word = new constructor(string);

console.log(word);


var kount = 0;
var guesses = 7;
var usedLetters = [];


letterPrompt();


function letterPrompt() {

	word.print();

    inquirer.prompt({

	    name: "guess",
	    message: "Guess a letter. Guesses remaining: " + guesses

    }).then(function(answers) {

		var guess = answers.guess.toUpperCase();

		//	Search through the whole word.
		//	Every time your guessed letter is in the word, and NOT in the used words array, we get one step closer to completing.
		for (i = 0; i < word.length; i++) {
			if (guess == word.letters[i].value && usedLetters.indexOf(guess) == -1) {
				word.letters[i].display = word.letters[i].value;
				kount++;
			}
		}

		//	If your guessed letter is NOT in the word, NOR in the used words array, subtract a guess.
		if (string.split("").indexOf(guess) == -1 && usedLetters.indexOf(guess) == -1) {
			guesses--;
		}

		usedLetters.push(guess);

		//	If all letters have not been guessed and guesses are remaining:
		if (kount < word.length && guesses > 0) {
			letterPrompt();
		} else if (kount == word.length) {
			word.print();
			console.log("YOU WON");
			restartPrompt();
		} else if (guesses == 0) {
			console.log("YOU LOST. ANSWER:");
			word.show();
			word.print();
			restartPrompt();
		}

    });
}



function restartPrompt() {

	inquirer.prompt({

		name: "restart",
		type: "confirm",
		message: "Do you want to play again?"

	}).then(function(answer) {

		if (answer.restart) {
			j++;
			string = listOfWords[j];
			word = new constructor(string);
			kount = 0;
			guesses = 5;
			usedLetters = [];
			letterPrompt();
		} else {
			console.log("END");
		}

	});
}