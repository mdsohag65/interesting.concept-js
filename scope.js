// global scope er variable local scope a use korte parbo  but local scope er variable global scope a use kora jay na
const favNum = 29;

function add(first, second) {
    const result = first + second;
    if (result > 10) {
        const mood = 'Happy';

    }
    // console.log(mood);
    // console.log(result);
    // console.log(favNum);
    return result;

}
const sum = add(13, 15);

for (let i = 0; i < 10; i++) {

}
// console.log(i);

// let and const are block scope..