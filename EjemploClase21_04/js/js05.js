//Manipulación de Objetos
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}
console.log(producto)

// //modificar un elemento
// producto.disponible = false
// console.log(producto)

// //agregar nuevo elemento
// producto.imagen = 'fotitoPalInsta.jpg'
// console.log(producto)

// //eliminar un elemento
// delete producto.precio
// console.log(producto)

//hacerlo inmodificable
//Object.freeze(producto) //de aquí hacia abajo NO hay modificaciones
// //modificar un elemento
// producto.disponible = false
// console.log(producto)

// //agregar nuevo elemento
// producto.imagen = 'fotitoPalInsta.jpg'
// console.log(producto)

// //eliminar un elemento
// delete producto.precio
// console.log(producto)

//modificable pero SIN NUEVOS elementos o ingresos
Object.seal(producto)
//modificar un elemento
producto.disponible = false
console.log(producto)

//agregar nuevo elemento
producto.imagen = 'fotitoPalInsta.jpg'
console.log(producto)

//eliminar un elemento
delete producto.precio
console.log(producto)