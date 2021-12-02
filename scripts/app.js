let userScore = 0;
let botScore = 0;
// Cashing the DOM: (for perfomace reason)
const spanUserScore = document.getElementById("user-score");
const spanBotScore = document.getElementById("bot-score");
const divScoreBoard = document.querySelector(".score-board");
const pResult = document.querySelector(".result > p");
const divRock = document.getElementById("r");
const divPaper = document.getElementById("p");
const divScissors = document.getElementById("s");

function getBotChoice() {
    const choises = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);

    return choises[randNum];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function setShadowEffect(result, userChoice) {
    const divUserChoice = document.getElementById(userChoice.charAt(0));
    switch (result) {
        case 'win':
            divUserChoice.classList.add('green-glow');
            setTimeout(() => divUserChoice.classList.remove('green-glow'), 1000);
            break;
        case 'lose':
            divUserChoice.classList.add('red-glow');
            setTimeout(() => divUserChoice.classList.remove('red-glow'), 1000);
            break;
        case 'draw':
            divUserChoice.classList.add('gray-glow');
            setTimeout(() => divUserChoice.classList.remove('gray-glow'), 1000);
            break;
    }
}

function win(userChoice, botChoice) {
    // Set the score in memory and in the page:
    userScore++;
    spanUserScore.innerHTML = userScore;
    pResult.innerHTML = `${capitalize(userChoice)} beats ${capitalize(botChoice)}. You won!🔥`;
    // Set color shadow for the played button:
    setShadowEffect('win', userChoice);
}

function lose(userChoice, botChoice) {
    botScore++;
    spanBotScore.innerHTML = botScore;
    pResult.innerHTML = `${capitalize(userChoice)} beats ${capitalize(botChoice)}. You lost..😥`;
    setShadowEffect('lose', userChoice);
}

function draw(userChoice, botChoice) {
    pResult.innerHTML = `${capitalize(userChoice)} equals ${capitalize(botChoice)}. It's a draw 😵`;
    setShadowEffect('draw', userChoice);
}

function playWith(userChoice) {
    const botChoice = getBotChoice();
    switch (`${userChoice}:${botChoice}`) {
        case "rock:scissors":
        case "paper:rock":
        case "scissors:paper":
            win(userChoice, botChoice);
            break;
        case "paper:scissors":
        case "rock:paper":
        case "scissors:rock":
            lose(userChoice, botChoice);
            break;
        case "rock:rock":
        case "paper:paper":
        case "scissors:scissors":
            draw(userChoice, botChoice);
            break;
    }
}

function main() {
    // Adding event listeners:
    divRock.addEventListener("click", () => playWith("rock"));
    divPaper.addEventListener("click", () => playWith("paper"));
    divScissors.addEventListener("click", () => playWith("scissors"));
}

main();
