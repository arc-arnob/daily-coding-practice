function shuffle(arr: any[]): void {
    // modify the arr inline to change the order randomly
    console.log(arr.sort(() => Math.random() - 0.5));
}

shuffle([1, 2, 3]);
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

console.log("Count: ", count);