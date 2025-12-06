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

console.log(cart.keys());
console.log(cart.values());

const map = new Map();

// console.log(map);
