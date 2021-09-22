function min(...numbers) {
  let result = Infinity;
  for (let number of numbers) {
    if (number < result) {
      result = number;
    }
  }
  return result;
}

console.log(min(-2, 1, -9, -6));
