let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(array[3]); //accessing elements
array.push(9); console.log(array); //pushing elements at the start
array.unshift(-1); console.log(array); //pushing elements at the end
array.pop(); console.log(array); //removes the last element.
array.shift(); console.log(array) //removes the first element. 
let len = array.length; console.log(len); //length of the array
const letters = new Set(['a', 'b', 'c']); console.log(letters.entries()); //using Set
//Using map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.entries())