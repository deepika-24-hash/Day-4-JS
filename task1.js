const fruits = ["goa", "watermelon", "pineapple", "apple", "banana"];

//filter()
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); 

//reduce()
const allFruits = fruits.reduce((total, fruit) => total + " " + fruit);
console.log(allFruits);

//slice()
const someFruits = fruits.slice(1, 3);
console.log(someFruits); 
console.log(fruits); 

//splice()
fruits.splice(2, 1); 
console.log(fruits); 

fruits.splice(1, 0, "kiwi"); 
console.log(fruits); 

//Spread
const fruitsCopy = [...fruits];
console.log(fruitsCopy); 

const moreFruits = ["papaya", "melon"];
const all = [...fruits, ...moreFruits];
console.log(all); 

