function multiplesOf3and5(number) {
  let resultArr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      resultArr.push(i);
    }
  }
  return resultArr.reduce((acc, curr) => acc + curr);
}
console.log(multiplesOf3and5(10));
