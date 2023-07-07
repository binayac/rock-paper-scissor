let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";
let moveList = ['Rock', 'Paper', 'Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');
let playerMoveDisplay = document.querySelector('#player-move-display');
let computerMoveDisplay = document.querySelector('#computer-move-display');

buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";
})

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let computerMove = randomMove();
        let playerMove = index;
        let result = calcResult(playerMove, computerMove);
        statusDisplay.textContent = result;
        playerMoveDisplay.textContent = `You chose: ${moveList[playerMove]}`;
        computerMoveDisplay.textContent = `Computer chose: ${moveList[computerMove]}`
    });
});

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         let computerMove = randomMove();
//         let playerMove = index;

//         let result = calcResult(playerMove, computerMove);

//         statusDisplay.textContent = result;
//         playerMoveDisplay.textContent = `You chose: ${moveList[playerMove]}`;
//         computerMoveDisplay.textContent = `Computer chose: ${moveList[computerMove]}`;
//     });
//   });

function calcResult(move1, move2){
    if (move1 === move2) {
        return tieMsg;
      } else if (
        (move1 === 0 && move2 === 2) ||
        (move1 === 1 && move2 === 0) ||
        (move1 === 2 && move2 === 1)
      ) {
        return winMsg;
      } else {
        return loseMsg;
      }
}


function randomMove(){
    return Math.floor(Math.random()*3);
}

function startGame(){
    statusDisplay.textContent = 'Choose!';
}

function endGame(event){}

startGame();