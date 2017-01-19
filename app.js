/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var resetGame =  document.querySelector('.btn-new');
var holdButton = document.querySelector('.btn-hold');
var playerOne = document.querySelector('.player-0-panel');
var playerTwo = document.querySelector('.player-1-panel');
var playerOneScore = document.getElementById('current-0');
var playerTwoScore = document.getElementById('current-1');
var playerOneNum = Number(playerOneScore.innerHTML);
var playerTwoNum = Number(playerTwoScore.innerHTML);
var dice = document.getElementsByTagName('img');
var diceOne = document.getElementsByTagName('img')[0];
var diceTwo = document.getElementsByTagName('img')[1];
var diceThree = document.getElementsByTagName('img')[2];
var diceFour = document.getElementsByTagName('img')[3];
var diceFive = document.getElementsByTagName('img')[4];
var diceSix = document.getElementsByTagName('img')[5];

// Toggles Players

function changePlayers() {
  playerOne.classList.toggle('active');
  playerTwo.classList.toggle('active');
}

// Resets Game
function startNewGame() {
  location.reload(resetGame);
}

function winGame() {
  // if total gets to 100 end game

}
// Generates Random Dice Roll
function rollDice(min, max) {
  var min = Math.ceil(1);
  var max = Math.floor(6);
  var roll = Math.floor(Math.random() * (max - min + 1)) + min;
  showDice(roll);
  tabulateScore(roll);
}

// Calculate Player Points

function tabulateScore(roll) {
  console.log(roll);
  console.log("tabscores")

  var firstTotal = 0;
  console.log(firstTotal);
  var secondTotal = 0
  console.log(secondTotal);
 
  if (playerOne.classList.contains('active')) {
    if (roll === 1) {
      console.log("First Craps")
      playerOneScore.textContent = 0;
      firstTotal = 0;
      console.log(firstTotal)
      changePlayers();
    } else {
        firstTotal = playerOneNum += roll;
        console.log('FT', firstTotal);
        playerOneScore.textContent = firstTotal;
      }
  } else {
      if (roll === 1) {
        console.log("Second Craps")
        secondTotal = 0;
        playerTwoScore.textContent = 0;
        changePlayers();
      }
      secondTotal = playerTwoNum += roll;
      console.log('ST', secondTotal);
      playerTwoScore.textContent = secondTotal;
  }
}

// Show Dice Roll 
function showDice(roll) {
  for (var i = 0; i < dice.length; i++) {
    dice[i].classList.remove('active');
    switch(roll) {
      case 1:
      diceOne.classList.add('active');
      break;
      case 2:
      diceTwo.classList.add('active');
      break;
      case 3:
      diceThree.classList.add('active');
      break;
      case 4:
      diceFour.classList.add('active');
      break;
      case 5:
      diceFive.classList.add('active');
      break;
      case 6:
      diceSix.classList.add('active');
      break;
      default: 
      dice.classList.remove('active');
      break;
    }
  }
}
