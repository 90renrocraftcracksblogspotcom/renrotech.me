let words = ["javascript", "python", "hangman", "github", "programming"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attemptsLeft = 6;

document.getElementById("word-display").textContent = "_ ".repeat(selectedWord.length).trim();

function guessLetter() {
    let input = document.getElementById("letter-input").value.toLowerCase();
    document.getElementById("letter-input").value = '';

    if (!input || guessedLetters.includes(input)) {
        document.getElementById("message").textContent = "Please enter a new letter.";
        return;
    }

    guessedLetters.push(input);

    if (selectedWord.includes(input)) {
        document.getElementById("message").textContent = `Good job! ${input} is in the word.`;
    } else {
        attemptsLeft--;
        document.getElementById("message").textContent = `Sorry, ${input} is not in the word.`;
    }

    updateDisplay();
}

function updateDisplay() {
    let displayWord = selectedWord.split('').map(letter => guessedLetters.includes(letter) ? letter : "_").join(' ');
    document.getElementById("word-display").textContent = displayWord;

    document.getElementById("attempts").textContent = `Attempts remaining: ${attemptsLeft}`;
    document.getElementById("guessed-letters").textContent = `Guessed letters: ${guessedLetters.join(', ')}`;

    if (displayWord.replace(/ /g, '') === selectedWord) {
        document.getElementById("message").textContent = "Congratulations! You've won!";
        document.getElementById("letter-input").disabled = true;
    }

    if (attemptsLeft <= 0) {
        document.getElementById("message").textContent = `Game over! The word was "${selectedWord}".`;
        document.getElementById("letter-input").disabled = true;
    }
}
