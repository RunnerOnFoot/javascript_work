let primes = [2, 3, 5, 7, 11, 13, 17, 19];
primes;
// (8) [2, 3, 5, 7, 11, 13, 17, 19]

primes[0];
// 2

primes[7];
// 19

primes.length;
// 8

primes[primes.length - 1];
// 19

primes[10];
// undefined

primes[2] = 1;
primes;
// (8) [2, 3, 1, 7, 11, 13, 17, 19]
