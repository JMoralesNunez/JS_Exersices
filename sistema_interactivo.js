let name = prompt("Ingresa tu nombre") //recibir nombre del usuario
let age = parseInt(prompt("Ingresa tu edad")) //Recibir edad del usuario y convertirla a numero

if (isNaN(age) || age < 0 ) { //validación de edad
    console.error("Ingresa una edad válida")
} else if (age < 18) {
    console.error(`Hola ${name}, eres menor de edad, no puedes ingresar`);
} else {
    console.log(`Hola ${name}, eres mayor de edad, puedes ingresar!`);
}
