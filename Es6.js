const myfunction = function () {
  console.log("VAR", counter);
  var counter = 0;
  console.log("LET", counter);
  let counter2 = 0;

  if (counter === 0) {
    var test = "Stefano";
  }

  console.log("TEST", test);
};

myfunction();

for (let i = 0; i < 10; i++) {}
console.log(ciao);
var ciao = "CIAO";

function greet() {}
const greet2 = function () {};
const obj1 = {
  name: "Stefano",
  favouriteColor: "blu",
};
const obj2 = obj1;
obj2.favouriteColor = "red";
console.log(obj1.favouriteColor);

let x = 10;
let y = x;
x = 30;
console.log("y", y);

const object1 = {
  brand: "Apple",
  model: "iphone 6s",
};
const object2 = {
  ...object1,
};
object2.model = "iPhone 15 Pro";
console.log(object1.model);

const object3 = {
  ...object1,
  color: "Midnight Black",
};

const fruit1 = {
  color: "red ",
  taste: "strong",
};
const fruit2 = {
  exotic: true,
  color: "orange",
};

const fruit3 = {
  ...fruit1,
  ...fruit2,
};
console.log("FRUIT3,fruit3");

const numbers1 = [2, 4, 6, 8, 10];
const numbers2 = numbers1;
numbers2.pop();
console.log(numbers1.length);

const num1 = [1, 3, 5, 7, 9];
const num2 = [...num1];
num2.pop();
console.log(num1.length);

const num3 = [...numbers1, ...num1];
console.log("9 elementi?", num3);

const acceptManyStrings = function (s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
  console.log(s10);
};

acceptManyStrings("Stefano", "gianmarco", "topogigio", "fedez");
acceptManyStrings("giuseppe", "loretta", "carloconti", "alessia", "ollie");
acceptManyStrings(
  "giuseppe",
  "loretta",
  "carloconti",
  "alessia",
  "ollie",
  "giorgia"
);
const printManyNames = function (...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};

printManyNames("stefano", "gianmarco", "topogigio", "fedez");
printManyNames(
  "giuseppe",
  "loretta",
  "carloconti",
  "alessia",
  "ollie",
  "rose",
  "brunorisas"
);
const myobj = {
  brand: "Sennheiser",
  color: "black",
  channels: 2,
  interface: "3.5 jack",
};

const { brand, color, channels, interface } = myobj;

console.log("brand", brand);
console.log("color", color);
console.log("channels", channels);

const str = "CIAO EPICODE";

const myAge = 18;

const message = "IO MI CHIAMO " + " E HO " + " ANNI ";
console.log("message", message);

const message2 = "IO MI CHIAMO ${myName} E HO $(myAge) ANNI";
console.log("message2", message2);

const printAName = (nome) => console.log(`MI CHIAMO ${NOME}`);

const namesArray = ["Pupo", "Gianni Morandi", "Elisa", "Claudio Baglioni"];

for (let i = 0; i < namesArray.length; i++) {
  i; // da 0 a 3
  namesArray[i]; // da 'Pupo' a 'Claudio Baglioni'
}
namesArray.forEach((name) => {
  console.log("DENTRO IL FOREACH");
});

for (let i = 0; i < namesArray.length; i++) {
  console.log("DENTRO IL FOREACH", namesArray[i]);
}

const objArray = [
  {
    brand: "Fiat",
    model: "Punto",
  },
  {
    brand: "Volkswagen",
    model: "Bora",
  },
  {
    brand: "Toyota",
    model: "Yaris",
  },
];

objArray.forEach((car, i) => {
  console.log(car.model, i);
});
const brandsArray = objArray.map((car) => {
  return car.brand;
});

console.log("BRANDARRAY", brandsArray);

const lowerCaseArray = ["barabara", "chiara", "gianni"];
const upperCaseArray = lowerCaseArray.map((namesstring) => {
  namesstring.toUpperCase();
});
console.log(upperCaseArray);
