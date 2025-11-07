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