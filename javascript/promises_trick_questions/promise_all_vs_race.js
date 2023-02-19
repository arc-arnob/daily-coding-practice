const promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(100), 5000);
})
const promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 2000);
})
const promise_3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(300), 1000);
})
const promise_4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(400), 9000);
})

Promise.race([promise_1, promise_2, promise_3, promise_4]).then((val) => console.log(val)); // 300

Promise.all([promise_1, promise_2, promise_3, promise_4]).then((val) => console.log(val)); // [ 100, 200, 300, 400 ]