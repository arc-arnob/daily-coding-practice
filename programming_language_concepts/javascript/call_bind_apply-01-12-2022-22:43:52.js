// Call, Apply, Bind

const employee1 = {
    name: "arnb",
    work: "sde",
    printFolio: function() {
        console.log("Folio: ", this.name , this.work);
    }
}

// Arrow Function do not have access to `this`.
const employee3 = {
    name: "arnb",
    work: "sde",
    printFolio: () => {
        console.log("Folio: ", this.name , this.work); // Undefined
    }
}

// Function Borrowing;
const employee2 = {
    name: 'lol',
    work: 'uz',
}

employee1.printFolio.call(employee2);

// Function Bind

let printAnyFolio = employee1.printFolio.bind(employee3);

printAnyFolio();






