let array = [1, 2, 3, 4, 5];
let array1 = [1, 2, 3, 4, 5];

function modification(array, modifier) {
  modifier(array);
}

modification(array, (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
});

modification(array1, (array1) => {
  for (let i = 0; i < array1.length; i++) {
    array1[i] = array1[i] + 1;
  }
});

console.log(array);
console.log(array1);
