let base = 2;
let exp = 4;
let resultFor = 1;
let resultWhile = 1;

//for Loop Version
for (let i = 0; i < exp; i++)
{
  resultFor = resultFor * base;
}

//while loop version
let counter = 0
while (counter < exp)
{
  resultWhile = resultWhile * base;
  counter++;
}

//recursion version
function resultRecursion(base, exp)
{
  if (exp == 0)
  {
    return 1;
  }
  else
  {
    return base * resultRecursion(base, exp - 1)
  }
}

console.log(resultFor, resultWhile, resultRecursion(base, exp))