// 10 funkci array

// forEach iterace pole

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

// ukazka forEach
console.info('Example Array.prototype.forEach');

arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
});

arr.forEach((currentItem, index, array) => {
    console.log('current item:' + currentItem);
    console.log('index:' + index);
});

// ukazka include
console.info('Example Array.prototype.includes');

// po staru pres indexOf
console.log(arr.indexOf(2) !== -1);
console.log(arr.indexOf(20) !== -1);

// nova ficura v ES7
console.log(arr.includes(2));
console.log(arr.includes(20));

// filter
console.info('Example Array.prototype.filter');

// item(s) greater than 3
const filtered = arr.filter(num => num > 3);
console.log(filtered); // output: [4, 5, 6]

// map
console.info('Example Array.prototype.map');

// add one to every element
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

// reduce secte polozky pole
console.info('Example Array.prototype.reduce');

const sum = arr.reduce((total, value) => total + value);
console.log(sum); // 21

const sum2 = arr.reduce((total, value) => total + value, 10);
console.log(sum2); // 31

// some
console.info('Example Array.prototype.some');

// at least one element is greater than 4?
const largeNum = arr.some(num => num > 4);
console.log(largeNum); // output: true

// at least one element is less than or equal to 0?
const smallNum = arr.some(num => num <= 0);
console.log(smallNum); // output: false

// every
console.info('Example Array.prototype.every');

// all elements are greater than 4
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false

// all elements are less than 10
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true

// sort
console.info('Example Array.prototype.sort');

const alpha = ['e', 'a', 'c', 'u', 'y'];

// sort in descending order
let descOrder = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sort in ascending order
let ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']

// from prevede HTML collection (pseudo pole) na pole. Pote lze aplikovat metody pole
console.info('Example Array.prototype.from');

const name = 'frugence';
const nameArray = Array.from(name);

console.log(name); // output: frugence
console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']

// I assume that you have created unorder list of items in our html file.
const lis = document.querySelectorAll('li');
const lisArray = Array.from(document.querySelectorAll('li'));

// is true array?
console.log(Array.isArray(lis)); // output: false
console.log(Array.isArray(lisArray)); // output: true

// of
console.info('Example Array.prototype.from');
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]