// This is a JavaScript Quiz from BFE.dev

new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
}).then((value) => {
    console.log(value)
}, (error) => {
    console.log('error')
})

// 1, since promise can settle only once.

