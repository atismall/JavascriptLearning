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

const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Pointing", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notification: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// ------------------------------------------- Destructuring -----------------------------------------

const {
  user: {
    name,
    age,
    email,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notification: {
      email: emailNotification,
      sms: smsNotification,
      push: pushNotification,
    },
    language,
  },
} = data;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math score: ${math}`);
console.log(`Science score: ${science}`);
console.log(`History score: ${history}`);
console.log(`Products 1: ${product1.name} - $${product1.price}`);
console.log(`Products 2: ${product2.name} - $${product2.price}`);
console.log(`Products 3: ${product3.name} - $${product3.price}`);
console.log(`Settings| DarkMode: ${darkMode}`);
console.log(`Settings| Email notification: ${emailNotification}`);
console.log(`Settings| SMS notification: ${smsNotification}`);
console.log(`Settings| Push notification: ${pushNotification}`);
console.log(`Settings| Language: ${language}`);
