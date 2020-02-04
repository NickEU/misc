// Let's try and copy some objects, shall we?

console.log(
  "\nOur problem: We want to make a copy of our object. Some of the properties of our object are also objects. What are our options?\n"
);

console.log("Let's start with an example that can showcase the issue:\n");

let recycleBin = {
  blogPost: {
    title: "Benefits of writing",
    author: "JBP"
  }
};

console.log("The original before we started making a copy: \n", recycleBin);

let backupTrashCan = {
  blogPost: recycleBin.blogPost
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

console.log("A copy is made: \n", backupTrashCan);
console.log("The original after we 'copied' it: \n", recycleBin); // gets changed

recycleBin = {
  blogPost: {
    title: "Benefits of writing",
    author: "JBP"
  }
};

//v1:

console.log(
  "\n1. A naive approach, just copy the values manually. Doesn't work all that well when you have dozens of values and deep nesting, is not a good idea.\n"
);

console.log("The original before we started making a copy: \n", recycleBin);

backupTrashCan = {
  blogPost: {
    title: recycleBin.blogPost.title,
    author: recycleBin.blogPost.author
  }
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

console.log("A copy is made using slave labour: \n", backupTrashCan);
console.log("The original after we 'copied' it: \n", recycleBin); // the values stay the same

//v2:

console.log(
  "\n2. Can use Object.assign() or the spread (...) operator. This makes a shallow copy so it doesn't work with deep nested objects, you run into the same problem in the original problem\n"
);

console.log("The original before we started making a copy: \n", recycleBin);

backupTrashCan = {
  blogPost: Object.assign({}, recycleBin.blogPost)
  //blogPost: {...recycleBin.blogPost}
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

console.log("A copy is made using Object.assign(): \n", backupTrashCan);
console.log("The original after we 'copied' it: \n", recycleBin);

//v3:

console.log(
  "\n3. Can use JSON.parse() and JSON.stringify(). Works for deep nesting, doesn't work with keys/values that are functions\n"
);

console.log("The original before we started making a copy: \n", recycleBin);

backupTrashCan = {
  blogPost: JSON.parse(JSON.stringify(recycleBin.blogPost))
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

console.log(
  "A copy is made using JSON parse() and stringify(): \n",
  backupTrashCan
);
console.log("The original after we 'copied' it: \n", recycleBin);
