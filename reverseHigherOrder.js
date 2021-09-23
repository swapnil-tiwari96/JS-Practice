function returnLambda(choice, array) {
  if (choice == 1) {
    return () => {
      for (i = 0; i < arguments[1].length; i++) {
        arguments[1][i] = arguments[1][i] + 1;
      }
    };
  }
  return () => {
    for (i = 0; i < array.length / 2; i++) {
      temp = array[i];
      array[i] = array[array.length - i - 1];
      array[array.length - i - 1] = temp;
    }
  };
}

let array = [1, 2, 3, 4];
let retFunc = returnLambda(1, array);
retFunc();
console.log("OG array");
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
