const person = {
  name: "John",
  age: 12,
  greet: () => {
    return `Hello, my name is ${person.name} & I am ${person.age} years old. 
    Also can this be a recursion ${person.greet}`;
  },
};
console.log(person.greet());
