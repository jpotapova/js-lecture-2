const a = 5; // ok
const b; // bad

a = 3; // bad

const c = [];
c.push(); // ok
c = [1, 2, 3]; // bad

const product = {};
product.title = "Tomatoes"; // ok
product.price = 1.5; // ok
product = { // bads
  title: "Tomatoes",
  price: 1.5
};
