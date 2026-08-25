const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.


const products = {
    Bubblegum : 2,
    Toffee: 0.2,
    "Ice cream": 5,
    "Milk chocolate": 4,
    Doughnut: 2.5,
    Pancake: 3.2
}
// print each product with its price
console.log("Prices:")
for (const [product, price] of Object.entries(products)) {
    console.log(`${product}; $${price}`);
}