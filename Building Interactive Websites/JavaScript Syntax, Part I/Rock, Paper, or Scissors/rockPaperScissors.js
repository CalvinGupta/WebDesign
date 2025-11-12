const getUserInput = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "bomb") {
      return userInput;
    }
    else {
      console.log("Not a valid choice");
    }
  }
  
  function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break; 
      case 2:
        return "scissors";
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice == "bomb") {
      return "win";
    }
    if (userChoice == computerChoice) {
      return "tie";
    }
    if (userChoice == "rock") {
      if(computerChoice == "scissors") {
        return "win";
      }
      else {
        return "lose";
      }
    }
    else if (userChoice == "paper") {
      if(computerChoice == "rock") {
        return "win";
      }
      else {
        return "lose";
      }
    }
    else if (userChoice == "scissors") {
      if(computerChoice == "paper") {
        return "win";
      }
      else {
        return "lose";
      }
    }
  }
  
  function playGame() {
    var userChoice = getUserInput("bomb");
    console.log(userChoice)
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  