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