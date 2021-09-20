function zeroPad(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  zeroPad(cows, "Cows");
  zeroPad(chickens, "Chickens");
  zeroPad(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
