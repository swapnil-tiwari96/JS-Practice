let n = 6;
for (let i = 0; i <= n; i++) {
  console.log(fibRec(i));
}
function fibRec(x) {
  if (x === 0 || x === 1) {
    return x;
  } else {
    return fibRec(x - 1) + fibRec(x - 2);
  }
}
