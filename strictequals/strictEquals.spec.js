const strictEquals = require("./index");

test.each([
  [1, 1, 1 === 1],
  [0.5, 0.5, 0.5 === 0.5],
  [0, -0, 0 === -0],
  [undefined, NaN, undefined === NaN],
  [undefined, null, undefined === null],
  [NaN, NaN, NaN === NaN],
  [-0, "0", -0 === "0"],
  ["test", "test", "test" === "test"]
])("%p === %p: %p", (a, b, expected) => {
  actual = strictEquals(a, b);
  expect(actual).toEqual(expected);
});
