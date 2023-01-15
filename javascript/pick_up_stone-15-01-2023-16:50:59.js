/**
 * There is a pile of n (n > 0) stones.

Player A and Player B take turns to pick 1 or 2 stones from the pile. A starts first.

Who picks the last stone loses the game.

Now here is the question,
is there a winning strategy for A or B ? If so, returns the player name. If there is none, return null.

winningStonePicking(1)
// 'B'

winningStonePicking(2)
// 'A'

winningStonePicking(3)
// 'A'

winningStonePicking(4)
// 'B'
 */

// Not a good Solution. Can Apply DP here.
const winningStonePicking = (n) => {
    return n % 3 === 1 ? "B" : "A";
}

console.log(winningStonePicking(1));