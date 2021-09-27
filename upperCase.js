// This solution will cap the first letter of the word in a list of names.
var nam = ["sWApniL AJay TIWari", "AAyAnsh shah", "AtharV ShARma"];
let newArray = [];

function overall(nam) {
  for (let word of nam) {
    newWord = word.split(" ");
    let supWord = [];
    for (let i = 0; i <= newWord.length - 2; i++) {
      let word = caps(newWord[i]);
      supWord = supWord + word + " ";
    }
    supWord = supWord + caps(newWord[newWord.length - 1]);
    newArray.push(supWord);
  }
  return newArray;
}

//cap first and rest lower
function caps(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}
console.log(overall(nam));
