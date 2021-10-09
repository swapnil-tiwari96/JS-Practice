let strings = "Hello World";

function countChar(strings) {
  let dict = {};
  for (let i of strings) {
    dict[i] = (dict[i] || 0) + 1;
  }
  return dict;
}

console.log(countChar(strings));
