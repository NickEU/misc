// Let's try and copy some objects, shall we?

let recycleBin = {
  blogPost: {
    title: "Benefits of writing",
    author: "JBP"
  }
};

console.log(
  "\nOur problem: We want to make a copy of our object. Some of the properties of our object are also objects. What are our options?\n"
);

console.log("Let's start with an example that can showcase the issue:\n");

console.log("The original object: \n", recycleBin);

let backupTrashCan = {
  blogPost: recycleBin.blogPost
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

printOutro(`bad assumptions`);

recycleBin = {
  blogPost: {
    title: "Benefits of writing",
    author: "JBP"
  }
};

//v1:

printIntro(
  `1. A naive approach, just copy the values manually. Doesn't work all that well when you have dozens of values and deep nesting, is not a good idea.`
);

backupTrashCan = {
  blogPost: {
    title: recycleBin.blogPost.title,
    author: recycleBin.blogPost.author
  }
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

printOutro(`slave labour`);

//v2:

printIntro(
  `2. Can use Object.assign() or the spread (...) operator. This makes a shallow copy so it doesn't work with deep nested objects; you run into the same issue in the original problem`
);

backupTrashCan = {
  blogPost: Object.assign({}, recycleBin.blogPost)
  //blogPost: {...recycleBin.blogPost}
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

printOutro(`Object.assign()`);

//v3:

printIntro(
  `3. Can use JSON.parse() and JSON.stringify(). Works for deep nesting, doesn't work with keys/values that are functions`
);

backupTrashCan = {
  blogPost: JSON.parse(JSON.stringify(recycleBin.blogPost))
};

backupTrashCan.blogPost.title = "Copy of " + recycleBin.blogPost.title;

printOutro(`JSON parse() and stringify()`);

function printIntro(introMsg) {
  console.log(`\n${introMsg}\n`);
  console.log("The original before we started making a copy: \n", recycleBin);
}

function printOutro(methodTypeMsg) {
  console.log(`A copy is made using ${methodTypeMsg}: \n`, backupTrashCan);
  console.log("The original after we 'copied' it: \n", recycleBin);
}
