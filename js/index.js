// en esta constante cree los nombres y precios de los zapatos 
const zapatos = [
    { nombre: 'Nike panda', precio: 1250 },
    { nombre: 'Jordans', precio: 3000 },
    { nombre: 'Terreneitor', precio: 10000 },
    { nombre: 'Zapato femenino', precio: 2500 }
];

// Esta función para calcular el total de los zapatos seleccionados
function calcularTotal(productos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const cantidad = prompt(`¿Cuántos ${producto.nombre} deseas comprar?`);

        // Validación de entrada
        if (!isNaN(cantidad) && cantidad > 0) {
            total += producto.precio * cantidad;
        } else {
            console.log("Por favor, ingresa un número positivo válido.");
        }
    }

    return total;
}

// Aqui se calcula el total y lo muestra
const totalCompra = calcularTotal(zapatos);
console.log(`El total de tu compra es: $${totalCompra}`);

