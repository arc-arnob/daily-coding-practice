const createPromise = () => Promise.resolve(1)

function func1() {
    createPromise().then(console.log) // async -> microtask
    console.log(2)
}

async function func2() {
    await createPromise() // await -> microtask
    console.log(3)
}

console.log(4) // Synchronus code
func1()
func2()

/**
 * Calculated Output.
 * 4
 * 1
 * 2
 * 3
 */

/**
 * Actual Output.
4
2
1
3
 */