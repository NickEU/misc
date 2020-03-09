const months = ["Jan", "April", "May"];
const monthsToInsert = ["Feb", "March"];
// splice with spread syntax
months.splice(1, 0, ...monthsToInsert);
console.log(months);
// ouput -> [ 'Jan', 'Feb', 'March', 'April', 'May' ]

const hello = { a: "a", b: "b" };
const arr = [1, 2];
// with objects you can add/remove props despite it being const
delete hello.b;
hello.c = "c";
arr.push(3);

function world(obj, arrInput) {
  arrInput.push(4);
  arrInput = [1, 2];
  obj = {};
  console.log("args = ", obj, arrInput);
  // output -> args = {} [1, 2]
}

world(hello, arr);
console.log("params = ", hello, arr);
// output => params = { a: 'a', c: 'c' } [ 1, 2, 3, 4 ]

// the arguments behave like var no matter what.
// can use ES6 rest params to make new constant variables

// more info here:
// https://stackoverflow.com/questions/30314457/how-to-make-function-parameter-constant-in-javascript

function worldConst(...args) {
  const [obj, arrInput] = args;
  // now this will throw an error:
  // arrInput = [1, 2];
  console.log(`const = `, obj, arrInput);
  // output => const = { a: 'a', c: 'c' } [ 1, 2, 3, 4 ]
}

worldConst(hello, arr);
