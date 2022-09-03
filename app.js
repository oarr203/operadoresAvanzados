let producto = document.getElementById("producto")
let cantidad = document.getElementById("cantidad")
let valor = document.getElementById("valor")
let agregar = document.getElementById("agregar")
let resultado = document.getElementById("resultado")
let mostarCostoTotal = document.getElementById("mostarCostoTotal")
let lista = document.getElementById("lista")
let costo = document.getElementById("costo")
let listaLocal = document.getElementById("listaLocal")
let descuento = document.getElementById("check")


let total = 0
const precios =[]


function agregarProducto(e) {
    e.preventDefault()
    let precioUnitario = cantidad.value * valor.value;

    total += precioUnitario
    resultado.innerHTML = "$: " + total


    localStorage.setItem("producto", producto.value)
    localStorage.setItem("cantidad", cantidad.value)
    localStorage.setItem("costo", valor.value)

    let productoLocal = localStorage.getItem("producto")
    let cantidadlocal = localStorage.getItem("cantidad")
    let costoLocal = localStorage.getItem("costo")


    let elemento = document.createElement("li");
    elemento.innerHTML += productoLocal + " x " + cantidadlocal + " unidades = " + precioUnitario + " pesos"
    lista.appendChild(elemento)

    producto.value = "";
    cantidad.value = "";
    valor.value = "";

    //desestructuracion
    const articulos = {
        producto1: productoLocal,
        cantidad1: cantidadlocal,
        costo1: costoLocal
    }

    let {producto1} = articulos

    console.log(producto1)

    
    precios.push(Number(costoLocal))


    console.log(precios)

   
}



function costoTotal() {

    //operador ternario

    descuento.checked? mostarCostoTotal.innerHTML = " El total de la compra con descuento del 10% es: $ " + total * 0.9 + "pesos":mostarCostoTotal.innerHTML = " El total de la compra es: $ " + total + "pesos"
        
const suma = precios.reduce((c,n)=> c+n,0)
//spread
console.log(...precios)

console.log(" total precio unitario: " + suma)

    
}
agregar.onclick = agregarProducto;
costo.onclick = costoTotal;