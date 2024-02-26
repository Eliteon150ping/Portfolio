let secret = Math.floor(Math.random() * 20 + 1);
let guess = 0;

while (guess !== secret) {

    let guess = parseInt(prompt("Please guess the secret number (1-20)"));
    // Convert the string guess to an integer so that we can compar
    if (guess !== secret) {
        if (guess < secret) {
            alert("Sorry, incorrect guess, too low");


        } else if (guess > secret) {
            alert("Sorry, incorrect guess, too high");


        };

    } else {
        alert("Correct Guess!");
        break;

    }

};

