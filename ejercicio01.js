//find the factorial of a number
function factorial(n) {
  if (n == 0) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

console.log(factorial(5));
console.log(factorial(15));

function factorialFor(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialFor(5));