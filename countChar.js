function countChar(charString, element) {
  let count = 0;
  for (let i of charString) {
    if (i == element) {
      count++;
    }
  }
  return count;
}

charString = "Hello Ooted Boy";
console.log(countChar(charString, "o"));
