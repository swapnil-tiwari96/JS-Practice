let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

// function Rabbit(type) {
//   this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit("weird");
