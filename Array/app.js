// const colors = ["red", "green", "blue", "yellow", "orange"];

// const [color1, color2, color3] = colors;

// console.log("color 1:", color1, "| color 2:", color2, "| color 3:", color3);
// // console.log();

// const student = { name: "Dave", position: "First", rollNo: 27 };

// const { ...rest } = student;

// console.log(rest.rollNo, rest.position);

// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };

// function printpersonInfo({ name, age, country }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Country: ${country}`);
// }

// printpersonInfo(person);

// let options = {
//   title: "My menu",
//   items: ["item1", "item2"],
// };

// function showMenu({ title, items: [item1, item2] }) {
//   console.log(`${title} ${item1} ${item2}`);
// }

// showMenu(options);

// const songs = [
//   { name: "Lucky You", singer: "Joyner", duration: 4.34 },
//   { name: "Just like you", singer: "Nf", duration: 3.23 },
//   { name: "Humble singer", singer: "kendrick Lomar", duration: 3.23 },
//   { name: "Old Town Road", singer: "Lil Nos x", duration: 3.56 },
// ];

// const [, , , { name }] = songs;

// console.log(name);

// const data = {
//   user: {
//     id: 123,
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       country: "USA",
//     },
//     hobbies: ["Reading", "Pointing", "Cooking"],
//     scores: {
//       math: 95,
//       science: 88,
//       history: 75,
//     },
//   },
//   products: [
//     { id: 1, name: "laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 500 },
//   ],
//   settings: {
//     darkMode: true,
//     notification: {
//       email: true,
//       sms: false,
//       push: true,
//     },
//     language: "English",
//   },
// };

// // ------------------------------------------- Destructuring -----------------------------------------

// const {
//   user: {
//     name,
//     age,
//     email,
//     address: { city, country },
//     hobbies,
//     scores: { math, science, history },
//   },
//   products: [product1, product2, product3],
//   settings: {
//     darkMode,
//     notification: {
//       email: emailNotification,
//       sms: smsNotification,
//       push: pushNotification,
//     },
//     language,
//   },
// } = data;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}, ${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math score: ${math}`);
// console.log(`Science score: ${science}`);
// console.log(`History score: ${history}`);
// console.log(`Products 1: ${product1.name} - $${product1.price}`);
// console.log(`Products 2: ${product2.name} - $${product2.price}`);
// console.log(`Products 3: ${product3.name} - $${product3.price}`);
// console.log(`Settings| DarkMode: ${darkMode}`);
// console.log(`Settings| Email notification: ${emailNotification}`);
// console.log(`Settings| SMS notification: ${smsNotification}`);
// console.log(`Settings| Push notification: ${pushNotification}`);
// console.log(`Settings| Language: ${language}`);

// ----------------------- TERNARY OPERATOR -------------------------------------------------

// function passwordChecker(ps) {
//   return ps === 8 ? `Strong Password` : `Password should be 8 character`;
// }

// const res = passwordChecker(5);
// console.log(res);

// function abs(x) {
//   return x > 0 ? x : x === 0 ? 0 : -x;
// }

// const res2 = abs(-3);

// console.log(res2);

// let haveMoney = false;
// const canBuyProduct = haveMoney ? `can buy product` : `Bring Money`;
// console.log(canBuyProduct);

// let person = {
//   name: "Dave",
//   age: 20,
//   gender: "male",
// };

// console.log(person["name"]);

// for (let keys in person) {
//   console.log(keys, person[keys]);
// }

// let list = ["one", "two", "three"];

// for (let index in list) {
//   console.log(index, list[index]);
// }

// const objects = { a: 1, b: 2, c: 3 };

// for (let object in objects) {
//   console.log(`${object}: ${objects[object]}`);
// }

// let peoples = ["Dave", "Alex", "John", "brad"];

// for (let people of peoples) {
//   console.log(people);
// }

// const array1 = ["a", "b", "c"];

// for (const array of array1) {
//   console.log(array);
// }

const colors = ["teal", "red", "blue", "green"];

// colors.forEach((item) => console.log(this, item));

colors.forEach((color, index, array) => console.log(color, index, array));

const words = ["hello", "bird", "table", "football", "pipe"];

words.forEach(function (word) {
  if (word === "hello") {
    for (let letter in word) {
      console.log(`${letter} : ${word[letter]}`);
    }
  }
});

words.forEach(function (word, index, arr) {
  arr[index] = word[0].toUpperCase() + word.substring(1);
  // console.log(words);
});

console.log(words);

const num = [3, 4, 5, 4, 7, 89, 54, 23];

let res = 0;

num.forEach((number) => (res += number));

console.log(res);

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);
console.log(sum);
