array1 = [1, 2, 4, 5, 6, 7];
function reverseArray(array1) {
  let array2 = [];
  for (let i = array1.length - 1; i >= 0; i--) {
    array2.push(array1[i]);
  }
  return array2;
}

console.log(reverseArray(array1));
console.log(array1.length);
console.log(array1.length - 1);
