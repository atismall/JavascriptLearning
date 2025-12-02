const colors = ["red", "green", "blue", "yellow", "orange"];

const [color1, color2, color3] = colors;

console.log("color 1:", color1, "| color 2:", color2, "| color 3:", color3);
// console.log();

const student = { name: "Dave", position: "First", rollNo: 27 };

const { ...rest } = student;

console.log(rest.rollNo, rest.position);

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

function printpersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printpersonInfo(person);
