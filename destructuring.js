const obj = {
  a: 1,
  b: 2,
  c: ['O', 'B', 'J'],
  d: { value: 'Val' },
};

//Binding Pattern
// const { a,b,c,d } = obj;//const a = obj.a
// console.log(a);
// console.log(c);

const { a: a1 } = obj;

console.log(a1);
//console.log(a);

//Assignment Pattern
let b;
({ b: b } = obj);
console.log(b);
