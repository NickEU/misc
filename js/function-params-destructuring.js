// If you want to define defaults in the function configuration, you'd use the following:

function myFunction({ text = "", line = 0, truncate = 100 } = {}) {
  // Even if the passed in object is missing a given key, the default is used!
}

// Setting a default with = { } is important;
// with no default the following example would error:
// TypeError: Cannot destructure property `key` of 'undefined' or 'null'
