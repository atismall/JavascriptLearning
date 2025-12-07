// const bag = new Map();

// bag.set("pencil", 3);
// bag.set("book", "Mathematics");
// bag.set("isHungry", true);
// bag.set("isCooking", true);

// console.log(bag.get("pencil"));
// console.log(bag.size);
// console.log(bag.has("book"));
// console.log(bag.has("booked"));
// bag.delete("pencil");
// console.log(bag.size);
// bag.clear();
// console.log(bag.size);

const person = { name: "Alex" };

const ages = new Map();

ages.set(person, 30);

// console.log(ages.get(person));

const cart = new Map();

cart.set("Apples", 3);
cart.set("Orange Juice", 1);
cart.set("Bread", 2);

for (let juice of cart.values()) {
  //   console.log(juice);
}

// console.log(cart.keys());
// console.log(cart.values());

const map = new Map();

const set = new Set();
// console.log(set);

set.add("Buruto");
let word = ["apple", "banana", "apple", "orange"];

word = new Set(word);
// console.log(word);

for (let uniqueWord of word) {
  //   console.log(uniqueWord);
}
// console.log(map);

const myObject = {};

const id = Symbol("id");

myObject[id] = 123;
// myObject[id] = 245;

// console.log(myObject);

const secret = Symbol("secret");

const user = {
  name: "Alice",
  [secret]: 42,
};

console.log(user[secret]);

for (let key in user) {
  console.log(key);
}
