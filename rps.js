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
    userScore++;
    return "You win! Rock breaks scissors."
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    userScore++;
    return "You win! Scissors cut paper."
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    userScore++;
    return "You win! Paper covers rock."
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    cpuScore++;
    return "You lose! Scissors are broken by rock."
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    cpuScore++;
    return "You lose! Paper is cut by scissors."
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    cpuScore++;
    return "You lose! Rock is covered by paper."
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let user = prompt("Please enter 'rock', 'paper', or 'scissors.'")
    user = user.toLowerCase();
    let cpu = computerPlay();
    playRound(user, cpu);
  }
}

let userScore = 0;
let cpuScore = 0;

game();

if (userScore > cpuScore) {
  console.log("You win!")
}
else {
  console.log("You lose!")
}