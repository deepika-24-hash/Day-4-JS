const student = {
  name: "Deepika",
  age: 19,
  course: "Information Technology",
  address: {
    city: "Coimbatore",
    pincode: 600001
  }
};

//Destructuring 
const { name, age } = student;
console.log(name); 
console.log(age);  

//Destructuring with default values
const { course, marks = 90 } = student;
console.log(course); 
console.log(marks);  

//Nested Destructuring
const { address: { city, pincode } } = student;
console.log(city);    
console.log(pincode); 

//Spread operator 
const extraInfo = { grade: "A", age: 19 };
const updatedStudent = { ...student, ...extraInfo };

console.log(updatedStudent);
