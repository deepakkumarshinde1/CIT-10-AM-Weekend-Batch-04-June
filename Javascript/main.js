// mouse events
// click, dblclick, mouseover, drag, drop, change

// keyboard events
// keypress, keyup

// Javascript + HTML ===> DOM Document Object Model

//html code ===> tree structure ===> DOM

// Runtime if you are making changes in html it is call as
// js manipulation
// to access a dom object/element
// get element we use
var inputOne = document.getElementById("inputOne");

function getMessage() {
  console.log(inputOne.value);
}

// undefined, string , number , boolean, object

// JS object
var object = {
  name: "Rahul",
  age: 21,
  location: "Mumbai",
};

//console.log(object); //70
//console.log(object["location"]); //30

var array = ["Rahul", 21, "Mumbai"];
//console.log(array[2]);

var tbodyId = document.getElementById("tbody-id");
var studentList = [
  {
    name: "Rahul",
    age: 21,
    location: "Mumbai",
  },
  {
    name: "harita",
    age: 20,
    location: "Nashik",
  },
  {
    name: "Rohan",
    age: 19,
    location: "Amravati",
  },
  {
    name: "Deepak",
    age: 31,
    location: "Akola",
  },
];

function printStudentData(student, index) {
  return `<tr>
              <th scope="row">${index + 1}</th>
              <td>${student.name}</td>
              <td>${student.age}</td>
              <td>${student.location}</td>
            </tr>`;
}
var newStudent = studentList.map(printStudentData);
tbodyId.innerHTML = newStudent.join("");

//opt generation in
var result = Math.random(); // 0 to 1
result = result * 10000; //4521.541254124444
result = Math.floor(result); // 4521

if (result < 1000) {
  result += "0";
}

//console.log(result);
var date = new Date();

// date
var output = date.toDateString();
output = date.getDate();
output = date.getFullYear();
output = date.getMonth() + 1;
output = date.getDay() + 1;

//time
output = date.toTimeString();
output = date.getHours(); // 24 hr
output = date.getMinutes();
output = date.getSeconds();

/***********************  function type   */
//general function
function add(a, b) {
  var result = a + b;
  console.log(result);
}
//add(10, 20);
// expression function
var sub = function (a, b) {
  var result = a - b;
  console.log(result);
};
// sub(20, 5);

// #callback function
function b(callback) {
  callback();
}

b(function () {
  console.log("function a");
  // callback function
  // inline function
});

/*function div(){
  console.log('div function');
}*/

//# Immediately Invoked Function Expression
(function (a, b) {
  var result = a / b;
  console.log("div function", result);
})(10, 5);
