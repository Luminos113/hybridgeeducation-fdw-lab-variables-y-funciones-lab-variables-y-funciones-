// Ejercicio 6: Conversión de Grados Celsius a Fahrenheit
// Declara una función llamada "celsiusAFahrenheit" que acepte un parámetro "celsius" y retorne la conversión a Fahrenheit
function celsiusAFahrenheit(celsius){
    fahrenheit = ((celsius* (9/5))+32)
    return  fahrenheit


}

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "celsiusAFahrenheit"


// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    celsiusAFahrenheit
};

