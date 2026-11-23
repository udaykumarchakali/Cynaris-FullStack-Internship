 
// ES5 to ES6+ Refactoring
 
// ES5
var studentName = "Uday";

function greetStudent(name) {
    return "Hello " + name;
}

console.log(greetStudent(studentName));


// ES6+
const greet = (name) => `Hello ${name}`;

console.log(greet("Uday"));

 
// Arrow Functions
 

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

console.log("Addition:", add(10, 20));
console.log("Multiplication:", multiply(5, 4));


 
// Template Literals
 

const name = "Uday";
const course = "Full Stack Development";

const message = `My name is ${name}. I am learning ${course}.`;

console.log(message);


 
// Array Destructuring
 

const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


 
//  Object Destructuring
 

const student = {
    name: "Uday",
    age: 21,
    course: "JavaScript"
};

const { name: studentName2, age, course: studentCourse } = student;

console.log(studentName2);
console.log(age);
console.log(studentCourse);


 
// Dataset
 

const students = [
    { id: 1, name: "Uday", marks: 85 },
    { id: 2, name: "Rahul", marks: 45 },
    { id: 3, name: "Arun", marks: 75 },
    { id: 4, name: "Kiran", marks: 35 },
    { id: 5, name: "vishu", marks: 95 }
];


 
// filter() Method
 

// Get students who passed (marks >= 50)

const passedStudents = students.filter(
    (student) => student.marks >= 50
);

console.log("Passed Students:", passedStudents);


 
// map() Method
 

// Get only student names

const studentNames = students.map(
    (student) => student.name
);

console.log("Student Names:", studentNames);


 
// reduce() Method
 

// Calculate total marks

const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log("Total Marks:", totalMarks);


// Interactive Component
const showButton = document.getElementById("showStudents");

showButton.addEventListener("click", () => {

    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach((student) => {

        const studentElement = document.createElement("p");

        studentElement.textContent =
            `${student.name} - Marks: ${student.marks}`;

        studentList.appendChild(studentElement);

    });

    document.getElementById("totalStudents").textContent =
        students.length;

    document.getElementById("passedStudents").textContent =
        passedStudents.length;

    document.getElementById("totalMarks").textContent =
        totalMarks;

    console.log("Student details displayed successfully!");

});
