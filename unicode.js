let stringOf = "🌹🐉";
for (let char of stringOf) {
  console.log(`The of operator: ${char}`);
}

for (let i in stringOf) {
  console.log(`The in operator: ${i}`);
}

console.log(stringOf.charCodeAt(0));
console.log(stringOf.codePointAt(0));
console.log(stringOf.charCodeAt(1));
console.log(stringOf.codePointAt(1));
