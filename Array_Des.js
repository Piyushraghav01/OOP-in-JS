const fruits = [
  'Apple',
  'Mango',
  'Kiwi',
  'Berry',
  'banana',
  'lichi',
];

//Binding Pattern

// const [a, , , k] = fruits;
// console.log(a, k);

const [a, m, ...[, be, ba]] = fruits;
console.log(ba);
