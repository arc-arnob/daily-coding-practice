// ERROR
const function1 = () => {
    console.log(arguments);
}

function function2() {
    console.log(arguments, typeof arguments);
    // Normal Array Methods cant be called on arguments:
    let argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray);
}

// function1(1,2,3)// ERROR 

function2(1, 2, 4); // [Arguments] { '0': 1, '1': 2, '2': 4 }