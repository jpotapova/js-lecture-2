var a; // ok
var b = 5; // ok
b = 3; // ok

if (true) {
  var d = 10;
  console.log(d); // ok
}

console.log(d); // bad
