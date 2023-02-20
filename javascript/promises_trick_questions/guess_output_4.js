
Promise.resolve(1)
    .then(() => 2)// returns 2
    .then(3) // error
    .then((value) => value * 3) // return 6
    .then(Promise.resolve(4)) //pedning promise
    .then(console.log) // 6

Promise.resolve(1)
    .then(console.log)

// Above is same as:
new Promise((resolve) => resolve(1))
    .then((val) => console.log(val))