function maximum(a, b)
{
  comparison(a, b);
  console.log(`${max} is the maximum`);
}

function minimum(a, b)
{
  comparison(a, b);
  console.log(`${min} is the minimum`);
}

let min = 0;
let max = 0;
function comparison(a, b)
{
  if (a > b)
  {
    min = b;
    max = a;
  } else if (a < b)
  {
    min = a;
    max = b;
  } else
  {
    min = max;
  }
}

console.log(minimum(2, 9));
console.log(maximum(6, 7));
