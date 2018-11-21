// Creates an array that lists out all of the options
var computerChoices = ["a", "b", "c", "d",
    "e", "f", "g", "h",
    "i", "j", "k", "l",
    "m", "n", "o", "p",
    "q", "r", "s", "t",
    "u", "v", "w", "x",
    "x", "y",

];



// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10; //Works
var guesses = []; //works 
var userGuess = [];


function reset() {



    console.log('Reset Ran!');
    guesses.length = 0;
    guessesLeft = 10;

    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + guessesLeft;

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('computer: ' + computerGuess);

}


console.log(guessesLeft);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('computer: ' + computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log('user: ' + userGuess);


    // Randomly chooses a choice from the options array
    //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];





    // If user guesses computer letter
    guesses.push(userGuess);

    document.getElementById("userchoice-text").textContent = "Your Guesses so far: " + guesses;

    if (userGuess === computerGuess) {
        console.log('u win');

        // user wins
        wins++;
        document.getElementById("wins-text").textContent = "Wins: " + wins;
        reset();

        // add point to wins

    } else if (guessesLeft === 0) {

        console.log('u lose');

        losses++;
        console.log(losses);
        document.getElementById("losses-text").textContent = "Losses: " + losses;
        reset();

    } else {
        console.log('u guessed wrong letter');

        guessesLeft--;



        document.getElementById("guessesleft-text").textContent = "Guesses Left: " + guessesLeft;

        console.log(guesses);

        //  guesses[i] = userGuess;

        //userChoiceText.textContent= guesses;
        // add incorrect guess to screen

        // subtract guesses left




    }


};
reset();