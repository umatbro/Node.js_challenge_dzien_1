// let numbers = [];
//
// for (let number of process.argv.slice(2)) {
//     numbers.push(parseInt(number));
// }
//
// let sum = numbers.reduce((a, b) => a + b);
// console.log(sum);

// oneliner
console.log(
  process.argv
      .slice(2) // cut off first 2 parameters
      .map((numberAsStr) => parseInt(numberAsStr))  // parse integers
      .reduce((acc, number) => acc + number) // accumulate all numbers
);
