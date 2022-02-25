// there are 7 types of data types in javascript..
/* 
primitive data types
1. number
2. string 
3. boolean
4. undefined
5. null
6. symbol

non-primitive data type
6. object
 */
let a = 'Hello';
let b = a;
// console.log(a, b);
a = 'Gello';
// console.log(a, b);

let x = { name: 'I am mr xxx' };
const y = x;
console.log(x, y);
// x.name = 'Call me James Bond';
y.name = 'Call me James Bond';
console.log(x, y);