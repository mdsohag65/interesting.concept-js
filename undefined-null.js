/* 
1.variable value not assigned,
2.function but didn't write return anything,
3.just wrote return but didn't return anything,
4.parameter that isn't pass,
5.property that doesn't exists in an object,
6.accessing array element out of length,
7.accessing deleted array element,
8.explicitly set value to undefined,
 */

let first;
// console.log(first);
function second(x, y) {
    const sum = x + y;
    // return sum;
}
const result = second(3, 10);
// console.log(result);
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    // return sum;
}
const fourth = add(2, 8);
// console.log(fourth);

function double(a, b) {
    const result = a * b;
    // console.log(b);
    return result;
}
double(20);

const fifth = { name: 'sokina', age: 36, address: 'bandarban' }
// console.log(fifth.address);
const sixth = [12, 32, 25, 14, 10];
// console.log(sixth[2]);
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObj = { name: 'sokina', profession: null };
console.log(myObj.profession);
