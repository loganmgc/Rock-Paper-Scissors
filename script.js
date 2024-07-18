const moves = ['rock', 'paper', 'scissors'];
const randommoves = [0, 1, 2]
const image = [
    `img/rock.png`,
    `img/paper.png`,
    `img/scissors.png`,
]
const resultmsgs = ['DRAW', 'YOU WIN', 'YOU LOSE'];
let computerMoveImage = document.getElementById('oppenentsMove');
let playerMoveImage = document.getElementById('yourMove');
let resultmsg = document.getElementById('result');
let displayresult = document.getElementById('resutlmsg');
function MainGame(playerChoice, type) {
    resultmsg.innerText = '';
    displayresult.style.opacity = 0;
    let button = document.getElementsByClassName('button');
    let player = document.getElementById(playerChoice).value;
    if (type == 1) {
        for (var i = 0; i < button.length; i++) {
            button[i].setAttribute('disabled', true);
        }
    }
    playerMoveImage.style.backgroundImage = `url('${image[player]}')`;
    playerMoveImage.style.opacity = 0.9;
    let moveIndex = Math.floor(Math.random() * 3)
    let computer = moves[moveIndex];
    let index = 0;
    var result = (CheckWin(player, computer));
    const interval = setInterval(() => {
        computerMoveImage.style.opacity = 0.9;
        computerMoveImage.style.backgroundImage = `url(${image[randommoves[index]]})`;
        index = (index + 1) % image.length;
    }, 75);
    setTimeout(() => {
        clearInterval(interval);
        computerMoveImage.style.backgroundImage = `url(${image[moveIndex]})`;
        resultmsg.innerText = resultmsgs[result];
        for (var i = 0; i < button.length; i++) {
            button[i].disabled = false;
        }
        displayresult.style.opacity = 1;
    }, 1500);
}
function CheckWin(playerMove, computerMove) {
    if (moves[playerMove] == moves[0] && computerMove == moves[2] ||
        moves[playerMove] == moves[1] && computerMove == moves[0] ||
        moves[playerMove] == moves[2] && computerMove == moves[1]) return 1;
    else if (moves[playerMove] == computerMove) return 0;
    else return 2;
}