function zeroPad(number, label) {
  let numberString = String(number);
  while (numberString < 3) {
    numberString = "0" + number;
  }
  console.log(`${numberString} ${label}`);
}

function animals(cows, pigs, chickens) {
  zeroPad(cows, "Cows");
  zeroPad(pigs, "Pigs");
  zeroPad(chickens, "Chickens");
}

console.log(animals(7, 11, 13));
