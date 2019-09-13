/** 
// Numbers

const a = "true";
const b = "false";

console.log(a && b);
console.log(a || b);
console.log(!a && b);

const x = 5;
const y = 7;
const z = 9;

console.log(x > z);
console.log(x > y);
console.log(!x === y);
console.log(x < y || z > x);
console.log(x === z || !x === y);
console.log(x >= 10 && y <= 10);
console.log(x * z < 100 || x * y > 100);
console.log(x * z < 100 && x * y > 100);

// comparison operation exercise

const p = 20;
const q = 30;
const r = 5;

console.log(p == q);
console.log(p !== q);
console.log(p > q);
console.log(p <= q);
console.log(p < q);
console.log(p * r > q * r);
console.log(p - r < q / r);
console.log(p == q && q == r && r == p);
console.log(p % r == q % r);
console.log(r + p > q - r);
console.log(r + p >= q - r);

*/

// Conditions

// prob.1
const anInteger = 71;
const anotherInteger = 83;

if (anInteger >= 50 && anInteger <= 99) console.log(true);
if (anotherInteger >= 50 && anInteger <= 99) console.log(true);

// Prob.2

const firstInteger = 71;
const secondInteger = 55;
const thirdInteger = 90;

if (firstInteger >= 50 || firstInteger <= 99) console.log(true);
if (secondInteger >= 50 || secondInteger <= 99) console.log(true);
if (thirdInteger >= 50 || thirdInteger <= 99) console.log(true);

// prob.3

const a = 13;
const b = 9;
const c = 21;

const highestValue = Math.max(a, b, c);

console.log(highestValue);

// prob.4

const givenString = "Python";

const newString = "Py" + givenString;

console.log(newString);

console.log(givenString);

// Prob. 5

const oneValue = 21;
const anotherValue = 33;

const sum = oneValue + anotherValue;

if (sum > 50 && sum < 80) {
  console.log(65);
} else console.log(80);

// prob 6

const oneNumber = 2;
const anotherNumber = 6;

const sum2 = oneNumber + anotherNumber;

const sub = oneNumber - anotherNumber;

if (sum2 == 8 || sub == 8) console.log(true);

// prob. 7

const integer1 = 7;
const integer2 = 8;

const sum3 = integer1 + integer2;

if (integer1 == 15 || integer2 == 15 || sum3 == 15);
console.log(true);

// Prob 8

const integer3 = 21;
const integer4 = 5;

const multiInteger3 = integer3 % 7 == 0;
const multiInteger4 = integer4 % 7 == 0;

if (multiInteger3 || multiInteger4) console.log(true);

// prob. 9

const integer5 = 5;
const integer6 = 5;

const sum4 = integer5 + integer6;

console.log(sum4);

if (integer5 == integer6) console.log(sum4 * 3);

// prob 10

const specifiedNumber = 33;
const givenNumber = 19;

const sub3 = specifiedNumber - givenNumber;

console.log(sub3);

if (sub3 > specifiedNumber) console.log(sub3 * 2);
else console.log(sub3);

// prob. 11

const aNumber = 579;

if (aNumber % 2 === 0) console.log("even");
if (aNumber % 2 !== 0) console.log("odd");

// Porb 12

const anyNumber = 645;

if (anyNumber % 3 === 0) console.log("Fizz");
if (anyNumber % 5 === 0) console.log("Buzz");
if (anyNumber % 3 === 0 && anyNumber % 5 === 0) console.log("FizzBuzz");
else console.log(anyNumber);
