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


