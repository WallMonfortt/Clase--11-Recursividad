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
function fibonacciMemo(n, memo) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  } else {
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
  }
}

function fibonacciDynamicProgramming(n) {
  let memo = new Array(n + 1).fill(-1);
  return fibonacciMemo(n, memo);
}

console.log('Fibonacci with dynamic programming of 6 is: ' + fibonacciDynamicProgramming(6));