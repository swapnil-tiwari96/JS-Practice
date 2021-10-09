strings = "a";
//console.log(strings.charCodeAt(0));

function indexOf(char) {
  return char.charCodeAt(0) - 97;
}

console.log(indexOf("c"));
console.log(indexOf("z"));

let variable = String.fromCharCode(97);
console.log(variable);
