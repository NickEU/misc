for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    // This function does not have a local copy of i - uses outer i, which is useless
    // in this situation because var is not block scoped.
    console.log("Outer = " + i);
  }, 2000);
  print(i);
}

function print(i) {
  setTimeout(function() {
    // Closure with a variable that's contained in a function scope
    console.log("Inner = " + i);
  }, 1000);
}
