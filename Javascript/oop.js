alert("Hello"); //native

function alert() {
  console.log("hello");
}

// overriding
class Human {
  legs = 2;
  constructor(sName) {
    this.name = sName;
  }
  running() {
    console.log(this.name, "is running with", this.legs, "legs");
  }
}

//
var human = new Human("deepak"); // Human() ==> external constructor
var human1 = new Human("Rahul");

//***********
var restaurantList = [
  {
    name: "Hotel Taj",
    location: "Mumbai",
  },
  {
    name: "Punjabi Tadka",
    location: "Nashik",
  },
];

class Restaurant {
  list = [];
  constructor(list) {
    this.list = list;
  }
  printRestaurant() {
    console.log(this.list);
  }
}

var restaurant = new Restaurant(restaurantList);
restaurant.printRestaurant();
