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