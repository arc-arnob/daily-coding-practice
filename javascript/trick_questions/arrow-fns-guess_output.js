const obj = {
    dev: 'bfe',
    a: function () {
        return this.dev // bfe
    },
    b() {
        return this.dev // ??
    },
    c: () => {
        return this.dev // ?? undefined
    },
    d: function () {
        return (() => {
            return this.dev
        })()// IFFY
    },
    e: function () {
        return this.b()
    },
    f: function () {
        return this.b // bfe
    },
    g: function () {
        return this.c()
    },
    h: function () {
        return this.c
    },
    i: function () {
        return () => {
            return this.dev
        }
    }
}

console.log(obj.a()) // Bfe
console.log(obj.b()) // bfe
// console.log(obj.c()) // Error, undefined of this.
console.log(obj.d()) // bfe
console.log(obj.e()) // bfe
// console.log(obj.f()()) //bfe ??
// console.log(obj.g()) // Error
// console.log(obj.h()()) // Error
console.log(obj.i()()) // bfe

/**
 * 

    Normal Function — the value of this is determined by how a function is called i.e. runtime binding.

    Arrow Function — don't provide their own this binding; it retains the this value of the enclosing lexical context i.e. static binding.

    Both a and b are normal functions, When a function is called as a method of an object, it's this is set to the object the method is called on (i.e. obj object)
    c is an arrow function hence it will basically borrow the scope from outside obj which is window
    d is a normal function so this points to obj inside it. The arrow function inside is in an IIFE and it takes this from enclosing context i.e. d hence referring to obj
    e invokes the b function internally and basically chains the value of this inside
    f though similar to e is a different case as it just returns a reference of b. We then execute this independently hence losing the reference to obj
    g and h internally use c which is an arrow function hence it always points to the window object
    i is similar to d only that it returns a reference to the inner arrow function rather than calling it immediately.

 */