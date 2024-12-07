const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;

async function init() {
  let currentGuess = "";

  function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }

  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    letters[currentGuess.length - 1].innerText = letter;
  }

  document.addEventListener("keydown", function (e) {
    const action = e.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      //do nothing
    }
  });
}

init();
