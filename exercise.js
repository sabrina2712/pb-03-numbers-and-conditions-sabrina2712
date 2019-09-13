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
