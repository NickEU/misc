const sentence =
  "this is a sentence which should be split into pairs of 2 words.";

const splitSentence = sentence => {
  let words = sentence.split(" ");
  const reducer = (acc, curr, idx) => {
    const id = Math.floor(idx / 2);
    // id in arr over arr[id] for type safety
    // id in arr returns a boolean
    // arr[id] returns string or undefined
    acc[id] = id in acc ? `${acc[id]} ${curr}` : curr;
    return acc;
  };
  return words.reduce(reducer, []);
};

console.log(splitSentence(sentence));
