function printAfter(seconds, text) {
    setTimeout(() => {
        console.log(text);
    }, seconds * 1000);
}

printAfter(4, `Node.js`);
printAfter(1, `się`);
printAfter(0, `Witam`);
printAfter(6, `i korzystam`);
printAfter(5, `w konsoli`);
printAfter(7, `z funkcji czasu!`);
printAfter(2, `z`);
printAfter(3, `programem`);


/*
Witam
się
z
programem
Node.js
w konsoli
i korzystam
z funkcji czasu!
*/