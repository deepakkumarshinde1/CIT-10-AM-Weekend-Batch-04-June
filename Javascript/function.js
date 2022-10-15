// // function

// function funName() {
//   console.log("its working");
// } // function definition

// funName(); //function call

/************* scope of variables*/

var a = 10; // global variable
var b = 20; // global variable

function add(a1, b1) {
  // formal parameters
  var result = a1 + b1; // local variable
  console.log(result);
}

add(a, b); // actual parameter

add(100, 20);
add(true, true);
