console.log('Wygląda na to, że wszystko działa :)');


// const text = "Hello world";
// let counter = 0;
//
// const intervalId = setInterval(() => {
//     console.log(text[counter++]);
//
//     if (counter === text.length) {
//         clearInterval(intervalId);
//     }
// }, 150);

let args = process.argv;
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
