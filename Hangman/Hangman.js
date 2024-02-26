let words = ["javascript", "monkey", "amazing", "pancake", "boy", "girl"];
let word = pickRandomWord();
let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let lives = 3;
while (remainingLetters > 0 && lives > 0) {
    //Show player progress
    showPlayerProgress();
    guess =  getGuess();  
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only! ");
    } else {
       let correctGuess = updateGameState();
       remainingLetters -= correctGuess;
    }


}
//after the loop
showAnswerAndCongraulatePlayer();

function pickRandomWord() {
    return words[Math.floor(Math.random() * words.length)];

}
function setupAnswerArray() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
  
}
function showPlayerProgress() {
    alert(answerArray.join(" "));
    
}
function getGuess() {
    return prompt(`Guess a letter, or click Cancel to stop playing\n You have ${lives} lives left. `);


}
function updateGameState() {
    guess = guess.toLowerCase();
    let correctGuess = 0;
    for (let j = 0; j < word.length; j++) {
        if (guess === word[j]) {
            if (answerArray[j] !== "_") {
                alert("You have already guessed this letter " + guess);
                break;
            } else {
                answerArray[j] = guess;
                correctGuess++;
    
            }

        }
    } if (correctGuess === 0) {
        lives--;
    }
    return correctGuess;
    
}
function showAnswerAndCongraulatePlayer() {
    if (guess === null) {
        alert("Sorry to see you leaving.\n The answer was " + word);
    } else if (remainingLetters === 0) {

        alert("Congratulations! You guessed correctly");
    } else {
        alert("You ran out of lives. The word is " + word);
    }

}



