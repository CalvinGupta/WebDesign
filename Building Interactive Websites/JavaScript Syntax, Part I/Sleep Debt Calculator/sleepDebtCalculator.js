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
  