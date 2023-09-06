
function getComputerSelection() {
  const weapons = ["rock", "paper", "scissors"]
  const randomIndex = Math.round(Math.random() * (weapons.length -1));
  return weapons[randomIndex];
}

// const  playerSelection = prompt("Type your weapon!")
const playerSelection = getComputerSelection();
const computerSelection = getComputerSelection();


console.log(computerSelection);
console.log(playerSelection);

playRound();

function playRound(playerSelection, computerSelection) {

    if ( playerSelection ===  computerSelection) {
      return "TIE";
    }

    else if (
      
          (playerSelection === "rock" && computerSelection === "scissors") || 
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper") ) {
          
            return "WON";
    }
    else {
      return "LOSE";
    }

}



