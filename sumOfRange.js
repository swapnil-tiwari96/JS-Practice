function sumofRange(start, end, step = start > end ? -1 : 1) {
  let sum = 0;
  if (step > 0) {
    for (i = start; i <= end; i += step) {
      console.log(i);
      sum += i;
    }
  } else if (step < 0) {
    for (i = start; i >= end; i += step) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum is " + sum);
}

// sumofRange(10, 1);
// sumofRange(1, 10);
sumofRange(10, 1, -2);
sumofRange(1, 10, 2);
