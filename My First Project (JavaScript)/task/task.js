const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

// initial prices of products
const products = {
    Bubblegum : 2,
    Toffee: 0.2,
    "Ice cream": 5,
    "Milk chocolate": 4,
    Doughnut: 2.5,
    Pancake: 3.2
}
const sales = {
    Bubblegum : 202,
    Toffee: 118,
    "Ice cream": 2250,
    "Milk chocolate": 1680,
    Doughnut: 1075,
    Pancake: 80
}
// print each product with its price
console.log("Earned amount:")
for (const [product, saleAmount] of Object.entries(sales)) {
    console.log(`${product}: $${saleAmount}`);
}
// variable to get sum of sales
let sum = 0;
for(let item in sales){
    sum += sales[item];
}
console.log("");
console.log(`Income: $${sum}`);