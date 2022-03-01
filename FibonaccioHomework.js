//Fibonacci of a number
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); //the function is called again, but this time n is decremented
  }
}

console.log('Fibonacci of 6 is: ' + fibonacci(6));

//Fibonacci dynamic programming
function fibonacciDP(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log('Fibonacci with dynamic programming of 6 is: ' + fibonacciDP(6));