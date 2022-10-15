// JS code
// native function
//"deepak" ===> string
//123 ===> number
// alert("deepak");
//alert(123);

/*
store data ===> Variables ==> Container
keyword are resolved words
var VarName; // it is undefined
var student = "Deepak";

aconsole.log(student); // development
console ===> object
     .log ===> method
*/

// comments
// ===> Single Line comments
/* 
    multi line comments
  */

var a = 10;
var b = 20;
// /************   Arithmetic  Operator */
// +
var result = a + b;
// -
var result = a - b;
// /
var result = a / 2; // Q
// *
var result = a * b;
// %
var result = a % b; // reminder

// ******************  Assignment Operators
var a = 10;
a += 5; //  a = a + 5;
a -= 5; //a = a - 5
a *= 5;
a /= 5; // a = a/5;
a %= 5; // a = a %5

a += 1; //a = a  +1;
++a; // increment operator
a++; // increment operator

a -= 1;
--a; // decrement operator
a--; // decrement operator
console.log(a);

//******************* */ conditional statement
var isServerDown = "No";
//if else
if (isServerDown == "Yes") {
  // true
  // console.log("payment fail");
} else {
  // false
  // console.log("payment successfully done");
}

//************************ */ comparison operator
/**
 == equals
 != not equals 
 > greater then
 < less then
 >= greater then equals
 <= less the equals
*/
var a = 20;
var b = 20;
if (a >= b) {
  console.log("Yes");
} else {
  console.log("No");
}

// **************************** //logical operator

var isServerDown = true;
var doBalanceIsThere = true;

// AND ====>  T && T ==> Valid
// OR ===> T || F ==> Valid
// NOT ====> !

// undefined
// string
// number
// boolean ===> true or false
if (isServerDown == false && doBalanceIsThere == true) {
  console.log("Payment is done");
} else {
  console.log("Payment is fail");
}

isServerDown = !isServerDown;
console.log(isServerDown);
