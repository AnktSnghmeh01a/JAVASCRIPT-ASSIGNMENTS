
let cartWithDuplicates = ["item1", "item2", "item3", "item2", "item4", "item1", "item5"]; // Example cart with duplicates

let cartWithoutDuplicates = [...new Set(cartWithDuplicates)];

console.log("Cart with duplicates: " + cartWithDuplicates);
console.log("Cart without duplicates: " + cartWithoutDuplicates);
