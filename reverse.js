array1 = [6, 4, 2, 3, 9, 8];
function reverseArray(array1) {
  let array2 = [];
  for (let i = array1.length - 1; i >= 0; i--) {
    array2.push(array1[i]);
  }
  return array2;
}

function reverseSame(array1) {
  for (i = 0; i < Math.floor(array1.length / 2); i++) {
    let c = array1[i];
    array1[i] = array1[array1.length - i - 1];
    array1[array1.length - i - 1] = c;
  }
  return array1;
}
console.log(reverseArray(array1));
console.log(reverseSame(array1));
