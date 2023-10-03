
//ENTREGA 1//

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


//ENTREGA 2//


//crear un producto nuevo//

const db = [ 
class Producto{

    constructor(nombre, material, medida, precio){
            this.nombre = nombre;
            this.material = descripcion;
            this.medida = stock;
            this.precio = precioU

      }

}]


function crearProductos () {
    let nombre = prompt("ingrese nombre de producto")
    let material = parseInt (prompt("ingrese material")
    let medidas = parseFloat (prompt("Ingrese medida"))
    let precio = prompt("ingrese precio")
    let imagen = prompt("ingrese imagen")

    const productoCreado = new Producto (nombre, material, medidas, precio, imagen)
    pusheamos a la data base

db.push(productoCreado)

console.table(db)

}



cargarDom ()

const productos = [ 
    { 
    id="1"; 
    nombre: "Escritorio",
    material: "madera",
    medidas: "0.80mx1.40m",
    precio: "$28512",
    imagen: "./img/foto.png"
    
    }
    
    {
    
    id="2"; 
    nombre: "Sofa",
    material: "tela",
    medidas: "0.40mx0.60m",
    precio: "$20192",
    imagen: "./img/foto.png"
        
    }
    
    ]

const contenedor = document.getElementById("contenedorProductos")
    
productos.forEach((producto) ⇒ {
    let contenedorProducto = document.createElement("div")

contenedorProductos.innerHTML=  '
<div class="card-body">
         <img src="..." class="card-img-top" alt="...">        
          <h5 class="card-title">Titulo: ${producto.nombre}</h5>
          <p class="card-text"> materiales: ${producto.material}</p>
          <p class="card-text"> medidas: ${producto.medidas}</p>
          <p class="card-text"> precio: ${producto.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div> 


contenedor.appendChild.(contenedorProducto)

})