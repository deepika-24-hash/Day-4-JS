//Create a simple object
const person = {
  name: "Anu",
  age: 18,
  sayHello: function() {
    console.log("Helloss My name is " + this.name);
  }
};

//Call the method

person.sayHello();

//Change a value in the object
person.age = 19;
console.log(person.age); 