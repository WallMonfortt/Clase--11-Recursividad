//Hanoi towers problem with stack and recursion
function Hanoi(n, from, to, aux) { //n is the number of discs, from is the tower from which the discs are taken, to is the tower to which the discs are moved, aux is the tower used as auxiliary
  if (n == 1) { //if n is 1, the disc is moved from the from tower to the to tower
    console.log(`Move disk 1 from ${from} to ${to}`);
  } else { //if n is greater than 1, the function is called again, but this time n is decremented
    Hanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    Hanoi(n - 1, aux, to, from);
  }
}

Hanoi(3, 'A', 'C', 'B');
console.log('next test');
Hanoi(4, 'A', 'C', 'B');
console.log('next test');
Hanoi(5, 'A', 'B', 'C');