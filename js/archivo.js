//bienvenido//
let nombre = prompt ("ingrese su nombre")
let nombreBienvenido = `Bienvenido ${nombre} a nuestro sitio`
console.log(nombreBienvenido)


//pagina logueo//
let nombreResistrado = prompt("Ingrese nombre")
let apellidoRegistrado = prompt("Ingrese apellido")

if((nombreRegistrado !== "") && (apellidoRegistrado !== "")){
        alert ("Inicio de sesion correcto")
   } else {
        alert = ("Ingrese nombre y apellido")
               }
 

//sumar productos//
function sumar(a,b,c) => a + b + c;


//colocar el precio de un producto//
let precioProducto = prompt("Ingrese el precio del producto")
let precioAceptado = `El precio es ${precioProducto}`

if(isNaN(precioProducto)){
    alert("Ingrese un precio valido")
}else{
   console.log(precioAceptado)
}



//agregar IVA al precio del producto//
const IVA = 1.21
let precioAceptado 
let precioConIva = precioAceptado * IVA;
console.log=(`el precio final con impuesto es: ${precioConIVa)}`)


//agregar un producto// ARRAY PUSH
let productos = ['sillon', 'silla','mesa']
productos.push('placard')
console.log(productos)


//lista de productos//

const sillon 
const silla
const mesa


//agregar productos//

function cargarProductos() {
    let nommbreProducto = prompt ("ingrese producto")
    if(productos.includes(nombreProducto)) {
        alert ("el producto ya esta en el carrito")
    }else{
        productos.push(nombreProducto)
        alert ("el producto se cargo de forma correcta")
    }
        }


