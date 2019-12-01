let a; // ok
let b = 5; // ok
b = 3; // ok

if (true) {
  let d = 10;
  console.log(d); // ok
}

console.log(d); // bad
