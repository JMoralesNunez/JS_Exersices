// 1.
let name = "Jhonatan"

let age = 23

let height = 178

let city = "Medellin"

let pet = true

// 2

let word = "Hello"

let num = 1654

let boolean = false

console.log(typeof word);
console.log(typeof num);
console.log(typeof boolean);

// 3

let num1 = 23
let num2 = 74
let result = `The result of the addition is: ${num1 + num2}`   
console.log(result);

// 4

let edad = 18
if (edad < 18) {
    console.log("Menor de edad");
}else{
    console.log("Mayor de edad");
    
}

// 5

let numberProducts=4

if (numberProducts>=3) {
    console.log("Aplicas para el descuento");
}else{
    console.log("Lo sentimos, no aplicas para el descuento, minimo 3 productos");
    
}

//6

let grade=4.3

if (grade>=4.5) {
    console.log("Excelente desempeño");
} else if(grade>=3 && grade < 4.5) {
    console.log("Apruebas");
} else{
    console.log("Repruebas");
}

// 7

let color = "green"

if (color=="green") {
    console.log("Avanza");
} else if (color=="yellow"){
    console.warn("Precaución");
} else if (color=="red"){
    console.error("Detente!");
} else{
    console.log("Invalid color");
}

// 8

let age2=24
let residense="Colombia"

if (age2>=15 && age2 <= 35 && residense=="Colombia") {
    console.log("Puedes participar");
} else{
    console.log("Lo sentimos, no puedes participar");
}

// 9

let account = 15000
let premium = true

if (premium) {
    console.log("Cliente preferencial");
} else if(premium==false){
    if (account<10000) {
        console.log("Saldo insuficiente");
    } else if (account>=10000 || account<= 1000000 ) {
        console.log("Saldo moderado");
    } else if (account>1000000){
        console.log("Cliente preferencial");
    }
}

// 10

let day = 1

switch (day) {
    case 1:
        console.log("Recibes menu 1");
        break;
    case 2:
        console.log("Recibes menu 2");
        break;
    case 3:
        console.log("Recibes menu 3");
        break;
    case 4:
        console.log("Recibes menu 4");
        break;
    case 5:
        console.log("Recibes menu 5");
        break;
    case 6:
        console.log("Recibes menu 6");
        break;
    case 7:
        console.log("Recibes menu 7");
        break;
    default: 
        console.log("Dia inválido");
        break;
}

// 11

let login = true
let reports = false
let age3 = 21
let membership=true

if (login) {
    if (!reports) {
        if (membership || age3 >= 21) {
            console.log("Felicidades! puedes acceder a la oferta");
        } else{
            console.log("Lo sentimos, no aplicas para la oferta");
        }
    } else{
        console.log("tienes reportes");
    }
} else{
    console.log("Inicia sesión");
}

// 12
let time = "mañana"
let weather = "soleado"
let umbrella = true

if (weather == "lluvioso" && !umbrella){
    console.log("Espera o toma el bus");
} else if (time == "noche"){
    console.log("Por seguridad, toma el bus");
} else if (weather=="soleado" && umbrella){
    console.log("Puedes ir caminando");
} else{
    console.log("Toma la mejor decisión según tu opinión");
}

// 13

let user="admin1"
let password="1234abc"
let attempts=0
let admin=true

while (attempts<3) {
    userInput = prompt("Ingresa tu nombre de usuario")
    userPassword = prompt("ingresa tu contraseña")
    if (userInput==user && userPassword==password) {
    console.log("Acceso permitido!");
    break
    } else if (admin && attempts<=1) {
            console.log("Acceso concedido como administrador");
            break
    } else {
        console.log("Usuario o contraseña incorrectos");
    }
}

// 14

counter=0
userCount=0

while (counter<5){
    user=prompt("Ingresa un nombre de usuario")
    if (user.length > 3) {
        userCount+=1
        counter++
    } else {
        console.error("Nombre de usuario inválido");
        counter++
    }
}

validUsers = `El número de usuarios válidos es de: ${userCount}`


// 15

let contrasenas = ["abc123", "segura2024", "pass", "hola1234"];

for (let i = 0; i < contrasenas.length; i++) {
    let tieneNumero = /\d/.test(contrasenas[i]);
    if (contrasenas[i].length >= 8 && tieneNumero) {
        console.log("Contraseña válida: " + contrasenas[i]);
        break;
    } else {
    console.log("Debe cambiar la contraseña: " + contrasenas[i]);
    }
}

// 16

let calificacion = 0;

while (calificacion !== 5) {
    calificacion = parseInt(prompt("Califica el servicio (1 a 5):"));
    if (calificacion !== 5) {
    console.log("Gracias, seguimos mejorando.");
    }
}

console.log("¡Gracias por calificarnos con 5!");


// 17
let usuario = "usuario";
let contrasena = "1234";
let intentos = 3;

for (let i = 1; i <= intentos; i++) {
    let inputUsuario = prompt("Usuario:");
    let inputContrasena = prompt("Contraseña:");

    if (inputUsuario === usuario && inputContrasena === contrasena) {
        console.log("Bienvenido");
        break;
    } else {
        let restantes = intentos - i;
        if (restantes > 0) {
            console.log("Datos incorrectos. Intentos restantes: " + restantes);
        } else {
            console.log("Cuenta bloqueada");
        }
    }
}

// 18 

let opcion = "";

while (opcion !== "salir") {
    opcion = prompt("Elige una opción:\n1. Ver perfil\n2. Editar perfil\n3. Cerrar sesión\n4. Salir").toLowerCase();

    if (opcion === "1" || opcion === "ver perfil") {
        console.log("Mostrando perfil...");
    } else if (opcion === "2" || opcion === "editar perfil") {
        console.log("Editando perfil...");
    } else if (opcion === "3" || opcion === "cerrar sesión") {
        console.log("Sesión cerrada");
    } else if (opcion === "4" || opcion === "salir") {
        console.log("Saliendo del menú...");
    } else {
        console.log("Opción no válida");
    }
}

// 19

let total = 0;
let option;

while (true) {
    opcion = prompt("¿Qué deseas hacer?\n1. Agregar producto\n2. Finalizar compra");

    if (opcion === "1") {
        let precio = parseFloat(prompt("Ingresa el precio del producto:"));
        total += precio;
        console.log("Producto agregado. Total hasta ahora: $" + total);
    } else if (opcion === "2") {
        console.log("Compra finalizada. Total a pagar: $" + total);
        break;
    } else {
        console.log("Opción no válida");
    }
}

// 20

let notas = [4.5, 2.8, 3.2, 1.9, 4.0];
let suma = 0;
let enRiesgo = 0;
let mayor = notas[0];
let menor = notas[0];

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    suma += nota;

    if (nota < 3) {
        console.log("Estudiante " + (i + 1) + " está en riesgo");
        enRiesgo++;
    }

    if (nota > mayor) mayor = nota;
    if (nota < menor) menor = nota;
}

let promedio = suma / notas.length;

console.log("Promedio general: " + promedio.toFixed(2));
console.log("Estudiantes en riesgo: " + enRiesgo);
console.log("Mayor nota: " + mayor);
console.log("Menor nota: " + menor);

