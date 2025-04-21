const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}

const cliente = {
    nombre : 'Beatriz',
    premium : true
}

const carrito = {
    cantidad : 1,
    ...producto //spread operator
}

console.log(carrito)

const nuevoObjeto = {
    ...producto,
    ...cliente
}

console.log(nuevoObjeto)

const nuevoObj2 = Object.assign(producto,cliente)
console.log(nuevoObj2)