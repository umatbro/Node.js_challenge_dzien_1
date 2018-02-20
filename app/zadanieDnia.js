let numbers = process.argv.slice(2).map((numAsStr) => Number(numAsStr));

let sortedNumbers = [];
for (let number of numbers) {
    setTimeout(() => {
        sortedNumbers.push(number);
        console.log(`Pushed ${number} to result array`);
    }, number * 100);
}

setTimeout(() => {
    console.log(sortedNumbers);
}, 1001);