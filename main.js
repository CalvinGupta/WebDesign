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

function secretMessage() {
  let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

  console.log(secretMessage.length);
  secretMessage.pop();
  console.log(secretMessage.length);
  secretMessage.push("to");
  secretMessage.push("Program");
  secretMessage[secretMessage.indexOf("easily")] = "right";
  secretMessage.shift();
  secretMessage.unshift("Programming");
  secretMessage.splice(6,5,"know,")
  console.log(secretMessage.join(" "))
}

function whaleTalk() {
  var input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];
var resultString = "";

for (let i = 0; i < input.length; i++) {
//console.log(i)
  if (input[i] == "e") {
    resultArray.push("e")
  }
  if (input[i] == "u") {
    resultArray.push("u")
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] == vowels [j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
resultString = resultArray.join("").toUpperCase();
console.log(resultString);
}

function mealMaker() {
  const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck == "string") {
      this._meal = mealToCheck;
    }
  },
  set price(pricetoCheck) {
    if (typeof pricetoCheck == "number") {
      this._price = pricetoCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}`
    }
    else {
      return 'Meal or price was not set correctly!';
    }
  }
}

menu.meal = "burger";
menu.price = 20;

console.log(menu.todaysSpecial);
}

function teamStats() {
  const team = {
  _players: [
    {firstName: "Alex", lastName: "Ovechkin", age: 40},
    {firstName: "Tom", lastName: "Wilson", age: 31},
    {firstName: "Ryan", lastName: "Leonard", age: 20}
  ],
  _games: [
    {opponent: "Rangers", teamPoints: 6, opponentPoints: 3},
    {opponent: "Senators", teamPoints: 3, opponentPoints: 4},
    {opponent: "Ducks", teamPoints: 7, opponentPoints: 4}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  }
}

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team._games);
}

function grammarChecker() {
  let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
var count = 0;
storyWords.forEach(word => count++);
console.log(count);
storyWords = storyWords.filter(word => word != unnecessaryWord);
storyWords = storyWords.map(word => word == misspelledWord ? "beautiful" : word);
var badWordIndex = storyWords.findIndex(word => word == badWord);
console.log(badWordIndex);
storyWords[badWordIndex] = "really";
var lengthCheck = storyWords.every(word => word.length <= 10);
console.log(lengthCheck);
storyWords = storyWords.map(word => word.length > 10 ? "stunning" : word);
console.log(storyWords.join(" "));
}

function challengeProjectCreditCardChecker() {
  // All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr) {
  var sum = 0;
  if (arr.length % 2 == 0) {
  for (let i = arr.length-1; i >= 0; i--) {
    if (i % 2 == 1) {
      sum += arr[i];
    }
    else if (arr[i]*2 < 10) {
      sum += arr[i] * 2;
    }
    else {
      sum += arr[i] * 2 - 9;
    }
  }
  }
  else {
    for (let i = arr.length-1; i >= 0; i--) {
    if (i % 2 == 0) {
      sum += arr[i];
    }
    else if (arr[i]*2 < 10) {
      sum += arr[i] * 2;
    }
    else {
      sum += arr[i] * 2 - 9;
    }
  }
  }
  if (sum % 10 == 0) {
    return true;
  }
  else {
    return false;
  }
}

function findInvalidCards(arr) {
  var invalidCards = [];
  for (let i = 1; i < arr.length; i++) {
    if (validateCred(arr[i]) == false) {
      invalidCards.push(arr[i]);
    }
  }
  return invalidCards;
}

function idInvalidCardCompanies(arr) {
  var invalidCompanies = [];
  for (let i = 1; i < arr.length; i++) {
    switch (arr[i][0]) {
      case 3:
        if(invalidCompanies.includes("Amex")) {

        }
        else {
          invalidCompanies.push("Amex");
        }
        break;
      case 4:
        if(invalidCompanies.includes("Visa")) {

        }
        else {
          invalidCompanies.push("Visa");
        }
        break;
      case 5:
        if(invalidCompanies.includes("Mastercard")) {

        }
        else {
          invalidCompanies.push("Mastercard");
        }
        break;
      case 6:
        if(invalidCompanies.includes("Discover")) {

        }
        else {
          invalidCompanies.push("Discover");
        }
        break;
      default:
        if(invalidCompanies.includes("Company not found")) {

        }
        else {
          invalidCompanies.push("Company not found");
        }
        break;
    }
  }
  return invalidCompanies;
}

console.log(idInvalidCardCompanies(findInvalidCards(batch)));
}

function challengeProjectMysteriousOrganism() {
  // Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, dna) {
    return {
        specimenNumber: num, 
        dnaMakup: dna,
        mutate: function() {
            let i = Math.floor(Math.random()*15);
            let dnaBases = ['A', 'T', 'C', 'G'];
            let newDNA = this.dnaMakup;
            dnaBases = dnaBases.splice(dnaBases.findIndex(dna[i]), 1);
            newDNA[i] = Math.floor(Math.random()*3);
            this.dnaMakup = newDNA;
        },
        compareDNA: function(pAequor) {
            let same = 0;
            for (let i = 0; i < this.dnaMakup.length; i++) {
                if (this.dnaMakup[i] == pAequor.dnaMakup[i]) {
                    same++;
                }
            }
            console.log(`specimen #1 and specimen #2 have ${100 * (same/(this.dnaMakup.length))}% DNA in common`)
        },
        willLikelySurvive: function() {
            let CorG = 0;
            for (let i = 0; i < this.dnaMakup.length; i++) {
                if (this.dnaMakup[i] == "C" || this.dnaMakup[i] == "G") {
                    CorG++;
                }
            }
            if (CorG / this.dnaMakup.length >= 0.6) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

let pAequorData = []

for (let i = 0; i < 30; i++) {
    pAequorData.push(pAequorFactory(i, mockUpStrand()));
}
}