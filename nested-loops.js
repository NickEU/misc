// Determining the Big O of a function that has a nested for loop
// with two different counters that are independent of each other:

// an example from http://pages.cs.wisc.edu/~vernon/cs367/notes/3.COMPLEXITY.html

// Nested loops
// First we'll consider loops where the number of iterations of the inner loop is
// independent of the value of the outer loop's index. For example:
function test(N, M) {
  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      //sequence of statements
      result++;
    }
  }
  return result;
}

console.log(test(5, 10));
console.log(test(100000, 1));

// The outer loop executes N times. Every time the outer loop executes, the inner loop executes M times.
// As a result, the statements in the inner loop execute a total of N * M times.
// Thus, the complexity is O(N * M).
// In a common special case where the stopping condition of the inner loop is j < N instead of j < M
//  (i.e., the inner loop also executes N times), the total complexity for the two loops is O(N2).

// Subquadratic designates an algorithm whose complexity is ~o(n^2), using the little-o notation.
// This means that the complexity grows much slower than n^2. It could be anything from linear to almost quadratic.

// our example :

const users = [
  { id: 1, posts: [1, 2, 3] },
  { id: 2, posts: [4, 5, 6] }
];

function getAllUsersPosts(users) {
  const flatPosts = [];
  for (let user of users) {
    for (let post of user.posts) {
      flatPosts.push(post);
    }
  }
  return flatPosts;
}

console.log(getAllUsersPosts(users)); // [ 1, 2, 3, 4, 5, 6 ]

// ??? O(m * n) where m is the number of users and n is the average number of posts per user???
// In this particular case it feels like it's linear relative to the size of input because we only
// go through every element of users array and every element of each post array once.

// Can technically call this subquadratic????

// some more info on the matter:
// https://cs.stackexchange.com/questions/3149/what-is-the-meaning-of-omn
