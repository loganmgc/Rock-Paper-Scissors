const moves = ['rock', 'paper', 'scissors'];
const image = [
    `img/rock.png`,
    `img/paper.png`,
    `img/scissors.png`,
]
const resultmsgs = ['DRAW', 'YOU WIN', 'YOU LOSE'];
const resultmsg = document.getElementById('result');
const displayResult = document.getElementById('resutlmsg');
function MainGame(playerChoice) {
    resultmsg.innerText = '';
    displayResult.style.opacity = 0;
    const button = document.getElementsByClassName('button');
    for (var i = 0; i < button.length; i++) {
        button[i].setAttribute('disabled', true);
    }
    const playerMove = document.getElementById(playerChoice).value;
    displayMove('playerMoveImage', playerMove);
    const computerMove = Math.floor(Math.random() * 3);
    let index = 0;
    const interval = setInterval(() => {
        index = (index + 1) % image.length;
        displayMove('computerMoveImage', index);
    }, 75);
    setTimeout(() => {
        clearInterval(interval);
        displayMove('computerMoveImage', computerMove);
        resultmsg.innerText = resultmsgs[determineWinner(playerMove, computerMove)];
        for (var i = 0; i < button.length; i++) {
            button[i].disabled = false;
        }
        displayResult.style.opacity = 1;
    }, 1500);
}
function displayMove(element, move) {
    const e = document.getElementById(element);
    e.style.backgroundImage = `url('${image[move]}')`;
    e.style.opacity = 0.9;
}
function determineWinner(playerMove, computerMove) {
    if (moves[playerMove] == moves[0] && moves[computerMove] == moves[2] ||
        moves[playerMove] == moves[1] && moves[computerMove] == moves[0] ||
        moves[playerMove] == moves[2] && moves[computerMove] == moves[1]) return 1;
    else if (moves[playerMove] == moves[computerMove]) return 0;
    else return 2;
}