let array = [6, 10, 12, 2, 15];
let mapArray = array.map((i) => i + 1);
let filterArray = array.filter((i) => i > 3);
let reduceArray = array.reduce((i, j) => i * j);

console.log(mapArray);
console.log(filterArray);
console.log(reduceArray);

