// Objeto de productos

const products = {
    1 : {id:1, name: "camisa", price: "25"},
    2 : {id:2, name: "pantalón", price: "50"},
    3 : {id:3, name: "tenis", price: "100"},
    4 : {id:4, name: "collar", price: "15"},
    5 : {id:5, name: "sudadera", price: "60"},
    6 : {id:2, name: "pantalon", price: "50"}
};

console.log("Keys del objeto products:", Object.keys(products));
console.log("Values del objeto products:", Object.values(products));
console.log("Entries del objeto products:", Object.entries(products));

// Conversión a set

const productsName =Object.values(products).map(product => product.name);
const productsSet = new Set(productsName)

console.log(productsSet);

// Creación de map

const productsMap = new Map([
    ["vestimenta", "camisa"],
    ["zapatos", "tenis"],
    ["accesorios", "collar"]
]);

console.log(productsMap);

// Recorrer con For ... in

for (const key in products) {
    console.log(`ID: ${products[key].id}, Nombre: ${products[key].name}, Precio: ${products[key].price}`);
}

// Recorrer set con for... of

for (const product of productsSet) {
    console.log(product);
}

//Recorrer map con forEach()

productsMap.forEach((value, key) => {
    console.log(`Categoria: ${key}, Producto: ${value}`);
});


//validación set

console.log(`Tamaño del Set (productos únicos): ${productsSet.size}`);
productsSet.forEach(product => {
    console.log(product);
});
