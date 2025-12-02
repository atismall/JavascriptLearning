// function person(firstName, lastName, ...hobbies) {
//   console.log("FirstName:", firstName);
//   console.log("Lastname:", lastName);
//   console.log("Hobbies:", hobbies);
// }

// person("David", "Atibig", "reading", "praying", "skipping");

function goodData(...userData) {
  console.log(userData);
}

goodData("Dave", "Programmer", 20, 19, ["one"]);
