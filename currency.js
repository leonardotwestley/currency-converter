const usdollarAmount = 35.63
const otherCurrency = 51.30
function calculateCurrency(currency, conversionRate) {
    const conversion = currency * conversionRate
    return conversion
}
calculateCurrency(usdollarAmount, otherCurrency);

const newAmount = calculateCurrency(usdollarAmount, otherCurrency)

console.log(newAmount.toFixed(2))


