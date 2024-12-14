let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    let valor = dollar / oneEuroIs.USD
    return valor * oneEuroIs.JPY;
};

function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD

};

function fromYenToPound(yen){
    let valor = yen / oneEuroIs.JPY
    return valor * oneEuroIs.GBP;
};

const sum = (a,b) => {
    return a + b
}

console.log(fromYenToPound(1000));


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
