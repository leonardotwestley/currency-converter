function tempConversions(celsius) {
    const farenheitResult = (celsius * 9/5) + 32
    const kelvinResult = (celsius + 273.15)
    const temperatureObject = {
        celsius: celsius,
        farenheit: farenheitResult,
        kelvin: kelvinResult
    }
    return temperatureObject
}

console.log(tempConversions(10).farenheit)