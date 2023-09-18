

//pagina logueo//
let nombreRegistrado = prompt("Ingrese nombre")
let apellidoRegistrado = prompt("Ingrese apellido")

if((nombreRegistrado !== "") && (apellidoRegistrado !== "")){
    let nombreBienvenido = `Bienvenido ${nombreRegistrado} a nuestro sitio`
    alert(nombreBienvenido)
   } else {
        alert("Ingrese nombre y apellido")
               }
 








//agregar productos //

function cargarProductos() {
    let Productos=["silla","sillon"]
    let nombreProducto = prompt ("ingrese producto").toLowerCase()
    if(Productos.includes(nombreProducto)) {
        alert ("el producto ya esta en el carrito")
    }else{
        Productos.push(nombreProducto)
        alert ("el producto se cargo de forma correcta")
    }
        }


cargarProductos()


//colocar el precio de un producto//
let precioProducto = prompt("Ingrese el precio del producto")
let precioAceptado = `El precio es ${precioProducto}`

if(isNaN(precioProducto)){
    alert("Ingrese un precio valido")
}else{
   alert(precioAceptado)
}


//agregar IVA al precio del producto//
const IVA = 1.21
let precioConIva = precioProducto * IVA;
alert(`el precio final con impuesto es: ${precioConIva}`)


