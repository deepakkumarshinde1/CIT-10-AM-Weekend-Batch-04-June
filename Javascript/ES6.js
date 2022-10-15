// ******* es6 variables
var a = 20;
let b = 30;
const c = 40;

var a = "deepak"; // re declaration
//let b = "deepak";// cant do a re declaration//
//c = "deepak"; // cant re assign value
//console.log(a);

//******** de structuring
let array = [10, 20, 30, 40, 50];
//let numberOne = array[0];
//let numberTwo= array[2];
let [numberOne, numberTwo, numberThree] = array;
//console.log(numberTwo, numberOne);

let restaurant = {
  rName: "Hotel Taj",
  location: "Mumbai",
  reating: 4.5,
  minCost: 333,
};

let { rName, location: rLocation, minCost } = restaurant;

// console.log(rName);
// console.log(rLocation);
// console.log(minCost);

// console.log(rName);
// console.log(rName);
// console.log(rName);

//********************************* Spread Operator (...) (Margin array / object)  */

let arrayOne = [10, 20, 30, 40];
let arrayTwo = [100, 200, 300, 400];

let arrayThree = [...arrayOne, ...arrayTwo];

let restaurantDetailsOne = {
  rName: "Hotel Taj",
  location: "Mumbai",
};

let restaurantDetailsTwo = {
  reating: 4.5,
  minCost: 333,
};

let newRestaurant = { ...restaurantDetailsOne, ...restaurantDetailsTwo };
//console.log(newRestaurant);

//*************************************** Rest Parameter */

function addition(...a) {
  let result = 0;
  a.forEach(function (value) {
    result += value;
  });
  console.log(result);
}
1;
addition(10, 20, 50, -10, 90);

//*************************************** Default Parameter */
function sub(a = 0, b = 0) {
  let result = a - b;
  console.log(result);
}

//sub(4);

//************************************** Arrow function ()=> */

// let add = function () {
//   return "this is an add function ";
// };

let addOne = () => {
  return "this is an addOne function";
};

// add(function () {
//   // call back
// });
// add(() => {
//   // call back
// });

//******************************** promise */

// i will upload video
let isUploaded = "Yes";
// old way
function videoUpload(isUpload) {
  return new Promise(function (resolve, reject) {
    if (isUpload === "Yes") {
      resolve();
    } else {
      reject();
    }
  });
} // promise definition

videoUpload(isUploaded)
  .then(function () {
    console.log("video is uploaded");
  })
  .catch(function () {
    console.log("video is not uploaded, please upload it.");
  });
//promise call

// new way
async function videoUpload(isUpload) {
  if (isUpload === "Yes") {
    return true;
  } else {
    return Promise.reject();
  }
} // promise definition

videoUpload(isUploaded)
  .then(function () {
    console.log("video is uploaded");
  })
  .catch(function () {
    console.log("video is not uploaded, please upload it.");
  });

//**************************************** async await */
// run more the on promise

async function add(a, b) {
  let result = a + b;
  return result;
}

async function sub(a, b) {
  let result = a - b;
  return result;
}

async function multi(a, b) {
  let result = a * b;
  return result;
}

async function calculation() {
  try {
    let addResult = await add(10, 20); // await return value it is always resolve
    let subResult = await sub(addResult, 10);
    let multiResult = await multi(subResult, 5);
    console.log(multiResult);
  } catch (error) {
    console.log(error);
  }
}

calculation();
