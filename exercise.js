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
