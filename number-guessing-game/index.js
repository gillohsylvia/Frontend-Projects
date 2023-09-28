const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById('submitButton').onclick = function () {
    const guess = document.getElementById('guessField').value;
    guesses++;
    if (guess == answer) {
        alert('You got it! It took you ' + guesses + ' guesses.');
    } else if (guess > answer) {
        alert('Too high! Guess again.');
    } else {
        alert('Too low! Guess again.');
    }
}