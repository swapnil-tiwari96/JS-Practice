let array = [1, 2, 3, 4, 5];

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

console.log(array);
