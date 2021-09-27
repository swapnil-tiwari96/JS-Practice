// if year%4 == 0 then leap year
// if year%100 == 0 then !leap year
// if year%400 ==0 then leap year

function leapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return "Leap year!";
      } else {
        return "Not a Leap year!";
      }
    } else {
      return "Leap year!";
    }
  } else {
    return "Not a Leap year!";
  }
}

console.log(leapYear(1930));
