function kelvinWeather() {
    //Creates a variable called kelvin
const kelvin = 293;

var celsius = kelvin - 273;

//Sets fahrenheit value based on celsius
var fahrenheit = celsius * (9/5) + 32;

var newton = Math.floor(celsius * (33/100));

//Rounds fahrenheit down to nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`);

console.log(`The temperature is ${newton} degrees Newton.
`);

}

function dogYears() {
    //Sets myAge to 16
var myAge = 16;

//Sets earlyYears to 2
var earlyYears = 2;

earlyYears *= 10.5;

//Sets later years to myAge - 2
var laterYears = myAge - 2;

//Multiplies later years by 4
laterYears *= 4;

//Sets myAgeInDogYears to earlyYears + laterYears
var myAgeInDogYears = earlyYears + laterYears;

//Sets my name to Calvin in lower case letters
var myName = "Calvin".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);

}

function magicEightBall() {
    var userName = "";
var userQuestion = "Will I eat tonight?";
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

if (userName) {
  console.log(`Hello ${userName}!`)
}
else {
  console.log("Hello!");
}

console.log(userQuestion);
console.log(eightBall);
}

function raceDay() {
    let raceNumber = Math.floor(Math.random() * 1000);
    var early = false;
    var age = 18;
    
    if (early && age > 18) {
      raceNumber += 1000;
    }
    
    if (early && age > 18) {
      console.log(`Your race will start at 9:30am. Race Number: ${raceNumber}`);
    }
    
    else if (age > 18) {
      console.log(`Your race will start at 11:00am. Race Number: ${raceNumber}`);
    }
    
    else if (age < 18){
      console.log(`Your race will start at 12:30pm. Race Number: ${raceNumber}`);
    }
    
    else {
      console.log(`Please go to registration desk.`);
    }
}

function rockPaperScissors() {
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
}

function sleepDebtCalculator() {
  function getSleepHours(day) {
    switch(day) {
      case "Monday":
        return 8;
        break;
      case "Tuesday":
        return 6;
        break;
      case "Wednesday":
        return 7;
        break;
      case "Thursday":
        return 8;
        break;
      case "Friday":
        return 5;
        break;
      case "Saturday":
        return 6;
        break;
      case "Sunday":
        return 9;
        break;
    }
  }
  
  const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
  
  
  function getIdealSleepHours(idealHours) {
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours(8);
  
    if(actualSleepHours == idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours of sleep more than you needed!`);
    }
    else {
      console.log(`You need to get ${idealSleepHours - actualSleepHours} hours more sleep!`)
    }
  }
  
  calculateSleepDebt();
  
}

function trainingDays() {
  // The scope of `random` is too loose 
const name = 'Nala';

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name,event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);


}