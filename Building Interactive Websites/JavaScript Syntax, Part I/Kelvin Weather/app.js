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
