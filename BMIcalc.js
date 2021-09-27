//write weight in kg, hieght in m
function BMI(weight, hieght) {
  let bmi = weight / (hieght * 2);
  return bmi;
}

console.log(Math.round(BMI(65, 1.8)));
