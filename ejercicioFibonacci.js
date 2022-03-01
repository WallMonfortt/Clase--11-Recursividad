//Fibonacci of a number
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(8));

function fibonacciFor(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}

console.log(fibonacciFor(3));
console.log(fibonacciFor(4));
console.log(fibonacciFor(8));