let n = 10000000;

const getPrimes = function(n) {
  const notPrimes = [];
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (!notPrimes[i]) {
      primes.push(i);
      let j = i;
      while (true) {
        j += i;
        if (j <= n) {
          notPrimes[j] = true;
        } else {
          break;
        }
      }
    }
  }

  console.log(primes.toString());
  return primes.length;
};

console.log(`\nFound ${getPrimes(n)} primes from 1 to ${n}`);
