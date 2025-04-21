//Objetos - Destructuring de dos o mas objetos
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}

// const cliente = {
//     nombre : 'Beatriz',
//     premium : true
// }
// console.log(producto)
// console.log(cliente)
//así marca error
// const {nombre} = producto
// const {nombre} = cliente

// const {nombre} = producto
// const {nombre : nombreCliente} = cliente

// console.log(nombre)
// console.log(nombreCliente)

const cliente = {
    nombre : 'Beatriz',
    premium : true,
    direccion : {
        calle : 'la calle',
        nro : 35
    }
}
const {nombre} = producto
//la siguiente línea hace error al compilar
//const {nombre : nombreCliente, direccion : calle} = cliente
const {nombre : nombreCliente, direccion : {calle}} = cliente
console.log(calle)