const tempInFarenheit = 87;


function convertedTemperature(tempInFarenheit) {
    const tempCelsius = (tempInFarenheit - 32) * .5556
    return tempCelsius
}

const output = convertedTemperature(tempInFarenheit)

console.log(output.toFixed(0))
