//Create a simple object
const person = {
  name: "Deepika",
  age: 19,
  Hello: function() {
    console.log("Hello My name is " + this.name);
  }
};

//Call the method

person.Hello();

//Change a value in the object
person.age = 20;

console.log(person.age); 
