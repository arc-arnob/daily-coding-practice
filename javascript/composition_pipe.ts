type Func = (arg: any) => any

function pipe(funcs: Array<Func>): Func {
    // your code here
    return function (args) {
        let result = args;
        for (let func of funcs) {
            result = func.call(this, result);
        }
        return result;
    }
}

const times = (y: number): Func => (x: number) => x * y
const plus = (y: number): Func => (x: number) => x + y
const subtract = (y: number): Func => (x: number) => x - y
const divide = (y: number): Func => (x: number) => x / y


console.log(
    pipe([
        times(2),
        times(3)
    ]))