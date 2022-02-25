/* falsy:
false
0 is a falsy value,
empty string is falsy,
undefined is falsy,
null is falsy,
NaN (Not a Number),
*/

/* truthy:
true
any number (positive or negative is true),
execpt empty string ,every string including blank space is truthy, '0', 'false', 'true',
empty array [] is truthy,
empty object {} is truthy
 */
let x = {};
console.log('value of x', x);
if (x) {
    console.log('Variable is truthy');
}
else {
    console.log('Variable is falsy');
}