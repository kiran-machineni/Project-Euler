function fiboEvenSum(n) {
  let fibArr = [1, 2];
  for (let i = 3; i <= n; i++) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  if (n > 2)
    return fibArr
      .filter((val) => val % 2 == 0 && val <= n)
      .reduce((acc, curr) => acc + curr);
  else return n;
}
console.log(fiboEvenSum(10));
