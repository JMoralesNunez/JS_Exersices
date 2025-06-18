// Estado Inicial:

let vida=5
let miembros=3
const mochila=[]

function estado() {
    console.info(`Tu vida actual es: ${vida}`);
    console.info(`Tus miembros actuales son: ${miembros}`);
    console.info(`En la mochila tienes: ${mochila}`);
}

// Buscar comida
console.log("El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?");

while (true) {
    console.log("Opción A: Ir al supermercado abandonado");
    console.log("Opción B: Robar mochila a un sobreviviente");
    let foodOption = prompt("Escribe la opción deseada: A/B").toUpperCase()

    if (foodOption == "A") {
        mochila.push("comida", "agua")
        vida -= 1
        break
    } else if (foodOption=="B") {
        mochila.push("linterna")
        miembros -= 1
        break
    } else {
        console.log("Elige una opción válida");
    }
}

estado()

// Lugar de refugio

console.log("Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.");

while (true) {
    console.log("Opción A: Esconderse en una farmacia");
    console.log("Opción B: Ir a una estación de buses");
    console.log("Opción C: Refugiarse en una tienda de campaña abandonada");

    let refugeeOption=prompt("Escribe la opción deseada: A/B/C").toUpperCase()

    if (refugeeOption=="A") {
        mochila.push("botiquin")
        vida++
        break
    } else if (refugeeOption=="B") {
        vida--
        break
    } else if (refugeeOption=="C") {
        mochila.push("bateria")
        vida--
        break
    } else {
        console.log("Elige una opción válida");
    }
}

estado()

// Ayudar o ignorar

console.log("Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión?");

while (true) {
    console.log("Opción A: Ayudar a una familia atrapada");
    console.log("Opción B: Ignorar y seguir avanzando");
    console.log("Opción C: Distraer a los enemigos y liberar a la familia a distancia");
    console.log("Opción D: Robar los recursos de la familia sin ser vistos");

    let assistOption=prompt("Escribe la opción deseada: A/B/C/D").toUpperCase()

    if (assistOption=="A") {
        miembros++
        mochila.push("mapa")
        break
    } else if (assistOption=="B") {
        miembros--
        break
    } else if (assistOption=="C") {
        mochila.push("linterna")
        vida--
        break
    } else if (assistOption=="D") {
        mochila.push("comida")
        miembros -= 2
        break
    } else {
        console.log("Elige una opción válida");
    }
}

estado()


// Señal de humo

console.log("Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.");

while (true) {
    console.log("Opción A: Investigar la señal");
    console.log("Opción B: Evitar la zona");

    let smokeOption=prompt("Escribe la opción deseada: A/B").toUpperCase()

    if (smokeOption=="A") {
        mochila.push("llave", "gasolina")
        break
    } else if (smokeOption=="B") {
        break
    } else {
        console.log("Elige una opción válida");
    }
}

estado()

// Exploración alta o baja

console.log("El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras?");

while (true) {
    console.log("Opción A: Subir a un edificio a observar");
    console.log("Opción B: Moverse por callejones");
    console.log("Opción C: Usar una alcantarilla conectada al metro");

    let expOption=prompt("Escribe la opción deseada: A/B/C").toUpperCase()

    if (expOption=="A") {
        mochila.push("intel")
        break
    } else if (expOption=="B") {
        vida--
        break
    } else if (expOption=="C") {
        mochila.push("tarjeta-acceso")
        break
    } else {
        console.log("Elige una opción válida");
    }
}

estado()

// Medio de transporte

console.log("La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.");

while (true) {
    console.log("Opción A: Reparar una bicicleta");
    console.log("Opción B: Ir a pie");

    let transportOption=prompt("Escribe la opción deseada: A/B").toUpperCase()

    if (transportOption=="A") {
        mochila.push("medicinas", "bateria")
        break
    } else if (transportOption=="B") {
        vida--
        break
    } else {
        console.log("Elige una opción válida");
    }
}

estado()

console.log("A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.");

if (vida>=3 && mochila.length >= 2 && mochila.includes("mapa")) {
    console.info("Felicidades, puedes ingresar al tunel del metro");
} else {
    console.error("No tienes los requisitos para avanzar, quedas atrapado en la ciudad");
}
