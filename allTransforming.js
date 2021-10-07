let array = [1, 2, 3, 4, 5];
let mapArray = array.map((i) => i + 1);
let filterArray = array.filter((i) => i > 3);
let reduceArray = array.reduce((i, j) => i * j);

console.log(mapArray);
console.log(filterArray);
console.log(reduceArray);
