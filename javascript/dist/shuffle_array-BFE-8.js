function shuffle(arr) {
    // modify the arr inline to change the order randomly
    console.log(arr.sort(function () { return Math.random() - 0.5; }));
}
shuffle([1, 2, 3]);
var count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};
for (var i = 0; i < 1000000; i++) {
    var array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
console.log("Count: ", count);
