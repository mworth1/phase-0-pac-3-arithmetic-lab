let a
let b
let string
function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}
function increment(a) {
    return (a += 1)
}
function decrement(a) {
    return (a -= 1)
}
function makeInt(string) {
     string = parseInt(string, 10)
     return string
}
function preserveDecimal(string) {
    string = parseFloat(string)
    return string
}
