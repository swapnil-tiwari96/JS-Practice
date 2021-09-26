//takes the age and returns how many days/weeks left

function timeLeft(age) {
  let newAge = 40 - age;
  let newAgeWeek = newAge * 52;
  let newAgeDay = newAge * 365;
  let newAgeMonth = newAge * 12;
  console.log(
    "You have " +
      newAge +
      " years left/" +
      newAgeMonth +
      " months left/" +
      newAgeWeek +
      " weeks left/" +
      newAgeDay +
      " days left to " +
      arguments[0]
  );
}

console.log(timeLeft(24));
