const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (a) => {
    let oneEuroIs = a * 1.2;
    return oneEuroIs; 
}

const fromDollarToYen = (a) => {
    let oneDollarIs = (a / 1.2) * 127.9;
    return oneDollarIs;
}

const fromYenToPound = (a) => {
    let oneYenIs = (a / 127.9) * 0.8;
    return oneYenIs;
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };