function computerPlay(comp) {
  let choice = Math.floor(Math.random() * 3); 
  if (choice == 0) {
    return "Rock";
  }
  else if (choice == 1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

computerPlay();
console.log(computerPlay());



  
