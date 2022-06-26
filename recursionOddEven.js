let k = 0;
let l = 1;
let n = -2200;
let m = 200;
function check(n)
{
    if (n == 0)
    {
        return "Even";
    }
    else if (n == 1)
    {
        return "Odd";
    }
    else if (n < 0)
    {
        return "Below 0 doesn't work";
    }
    else
    {
        return check(n - 2);
    }
}

console.log(check(k));
console.log(check(l));
console.log(check(m));
console.log(check(n));