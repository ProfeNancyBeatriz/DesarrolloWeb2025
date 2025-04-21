//Objetos
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}

// console.log(producto)
// console.log(typeof producto)
// console.table(producto)
// console.log(producto.precio)

// const nombreProd = producto.nombre //esto no es lo + correcto
// console.log(nombreProd)

//Destructuring
// const { nombre } = producto
// console.log(nombre)

const { nombre, precio , disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
const autenticado = true
const usuario = 'Lulú'
const nuevoObjeto = {
    autenticado,
    usuario
}
console.log(nuevoObjeto)