let n = 10000000;

const getPrimes = function(n) {
  const notPrimes = [];
  const primes = [];
  let whileIterations = 0;

  for (let i = 2; i <= n; i++) {
    if (!notPrimes[i]) {
      primes.push(i);
      //j = i * i instead of j = i since all multiples of i
      //from i to i * i will be multiples of previous primes
      //that we have crossed off already
      // 25% fewer iterations of while loop for n = 10mil
      // down from 30m to 23m
      let j = i * i;
      while (true) {
        whileIterations++;
        if (j <= n) {
          notPrimes[j] = true;
        } else {
          break;
        }
        j += i;
      }
    }
  }

  console.log(primes.toString());
  console.log(`\nNr. of while iterations: ${whileIterations}`);
  return primes.length;
};

console.log(`\nFound ${getPrimes(n)} primes from 1 to ${n}`);
