let counter = 0;
let result = 1;
while (counter < 10) {
  result *= 3;
  counter += 1;
}

let result2 = 1;
for (counter = 0; counter < 10; counter += 1) {
  result2 *= 2;
}

console.log(result, result2);
