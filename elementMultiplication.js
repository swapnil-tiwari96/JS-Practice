var array = [6, 9, 4, 6, 2, 3, 1];

// function reduce(array, combine, start) {
//   for (let element of array) {
//     start = combine(current, element);
//   }
//   return start;
// }

//function to get the iterator element out and make array out of it.
function elementOut(array, element) {
  let newArray = array.slice(0, array.length);
  newArray.splice(element, 1);
  return newArray;
}

//function to multiply elements in the array.
function multiply(array) {
  var output = 1;
  for (let i of array) {
    output = i * output;
  }
  return output;
}

//function to make new array with every element is a multiplication of other elements.
function makeNewArray(array) {
  newArray = [];
  for (let i in array) {
    let temparray = elementOut(array, i);
    let tempElement = multiply(temparray);
    newArray.push(tempElement);
  }
  return newArray;
}
console.log(makeNewArray(array));
