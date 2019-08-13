// AND returns the first falsy value or the last value if none were found.

// if the first operand is truthy,
// AND returns the second operand:
return 1 && 0; // 0
return 1 && 5; // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
return null && 5; // null
return 0 && "no matter what"; // 0
// We can also pass several values in a row. See how the first falsy one is returned:

return 1 && 2 && null && 3; // null
// When all values are truthy, the last value is returned:

return 1 && 2 && 3; // 3, the last one
