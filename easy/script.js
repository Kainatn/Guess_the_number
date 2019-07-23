let randm;
let count;

function reSetGame() {
    randm = Math.floor(Math.random() * 100);
    count = 0;
}
reSetGame();

function guessNumber() {

    let guessedNumber = document.querySelector('input').value;
    if (guessedNumber != '') {
        if (guessedNumber == randm) {
            alert('Congratulation You guessed the ' + randm + " in : " + count + " tries");
            count++;
            document.querySelector('body').style.backgroundImage = "url('https://66.media.tumblr.com/849c4259435e5ff9789dd42e23fbf003/tumblr_p422nhq6vi1qzm8dwo1_400.gif')";
            reSetGame();
        } else if (guessedNumber < randm) {
            alert("You guessed Small Number");
            count++;
        } else if (guessedNumber > randm) {
            alert("You guessed Big Number");
            count++;
        }
    } else {
        alert("Enter number First");
    }
}