// Objeto de productos

const products = {
    1 : {id:1, name: "camisa", price: "25"},
    2 : {id:2, name: "pantalón", price: "50"},
    3 : {id:3, name: "tenis", price: "100"},
    4 : {id:4, name: "collar", price: "15"},
    5 : {id:5, name: "sudadera", price: "60"},
    6 : {id:2, name: "pantalon", price: "50"}
};

// Conversión a set

const productsNameSet = new Set(Object.values(products).map(product => product.name));

console.log(productsNameSet);

// Creación de map

const productsMap = new Map([
    ["vestimenta", "camisa"],
    ["vestimenta", "pantalón"],
    ["zapatos", "tenis"],
    ["accesorios", "collar"],
    ["vestimenta", "sudadera"]
]);