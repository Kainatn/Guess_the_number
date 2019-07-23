let count = 0;
let numb = 100;
let randm = Math.floor(Math.random() * numb);

function guessNumber() {

    let guessedNumber = document.querySelector('input').value;
    count++;
    if (guessedNumber != '') {
        if (guessedNumber == randm) {
            alert('Congratulation You guessed the ' + randm + " in " + count + "tries");
        } else if (guessedNumber < randm) {
            alert("You guessed Small Number");
        } else if (guessedNumber > randm) {
            alert("You guessed Big Number");
        }
    } else {
        alert("Enter number First");
    }
}