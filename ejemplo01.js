//recursive function
let counter = 0;
function recursive(n) { //n is the number of times the function will be called
    if (n > 0) { //if n is greater than 0, the function will be called again
      console.log(n);
      counter++;
      console.log(counter);
        recursive(n - 1);//the function is called again, but this time n is decremented
    }
}


recursive(10);