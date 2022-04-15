function computerPlay() {
  let choice = Math.floor(Math.random() * 3); 
  if (choice == 0) {
    return "rock";
  }
  else if (choice == 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!"
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock breaks scissors."
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors cut paper."
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper covers rock."
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Scissors are broken by rock."
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Paper is cut by scissors."
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Rock is covered by paper."
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


  
