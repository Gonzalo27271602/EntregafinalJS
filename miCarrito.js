  //----------------------HASTA ACÁ FUNCIONA TODO BARBARO-------------ACÁ COMIENZA LA PRUEBA
  let carrito = JSON.parse(localStorage.getItem('carrito')) || []; //Traigo mi carrito desde el local storage

function mostrarMiCarrito() {
    const productosDeMiCarrito = document.getElementById("productosDeMiCarrito");
    productosDeMiCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `<div>
                            <ul>
                                <li><img src="${producto.img}" alt="foto_del_producto"></li>
                                <li><h3>${producto.nombre} - ${producto.marca}</h3></li>
                                <li>Precio: $${producto.valor} En 1 pago</li>
                                <li>Cuotas: ${producto.cuotas} Sin interés</li>
                                <li>Cantidad: <span id="cantidad-${producto.id}">${producto.cantidad}</span></li>
                            </ul>
                            <div class="btncantidad">
                                <button id="restar-${producto.id}" class="restar">-</button>
                                <button id="sumar-${producto.id}" class="sumar">+</button>
                                <button id="eliminar-${producto.id}" class="eliminar">Eliminar</button>
                            </div>
                        </div>`;

        productosDeMiCarrito.appendChild(div);
    });

    // Agregar eventos a los botones de eliminar
    document.querySelectorAll(".eliminar").forEach(boton => {
        boton.addEventListener("click", (e) => {
            let productoId = parseInt(e.target.id.replace("eliminar-", ""), 0);
            eliminarProducto(productoId);
        });
    });

    // Agregar eventos a los botones de sumar cantidad
    document.querySelectorAll(".sumar").forEach(boton => {
        boton.addEventListener("click", (e) => {
            let productoId = parseInt(e.target.id.replace("sumar-", ""), 0);
            modificarCantidad(productoId, 1);
        });
    });

    // Agregar eventos a los botones de restar cantidad
    document.querySelectorAll(".restar").forEach(boton => {
        boton.addEventListener("click", (e) => {
            let productoId = parseInt(e.target.id.replace("restar-", ""), 0);
            modificarCantidad(productoId, -1);
        });
    });
}

// Función para eliminar producto del carrito
function eliminarProducto(productoId) {
    carrito = carrito.filter(producto => producto.id !== productoId);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarMiCarrito();
}

// Función para modificar la cantidad de productos
function modificarCantidad(productoId, cambio) {
    let producto = carrito.find(p => p.id === productoId);
    if (producto) {
        producto.cantidad += cambio;
        if (producto.cantidad <= 0) {
            eliminarProducto(productoId);
        } else {
            localStorage.setItem("carrito", JSON.stringify(carrito));
            document.getElementById(`cantidad-${producto.id}`).innerText = producto.cantidad; // Actualizar cantidad en el HTML
            document.getElementById(`cantidadTexto-${producto.id}`).innerText = producto.cantidad; // Actualizar cantidad visible
        }
    }
}

mostrarMiCarrito(); // Mostrar el carrito al cargar la página

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tiendaDeProductos").addEventListener("click", function () {
        window.location.href = "productos.html";
    });
});

//------------------PAGAR PRODUCTOS------------------------------------SEGUIR REVISANDO NO FUNCIONAAAAAAAAAAAA

/*
function pagar() {
    const pagarProductos = document.getElementById("pagarProductos");
    pagarProductos.innerHTML = "";

    //const total = calcularTotal(carrito); // Calculamos el total
    carrito.forEach(producto => {
    const div = document.createElement("article");
    article.classList.add("valgral");
    div.innerHTML = `<div class="cuadrovalor">
                        <div class="valor">
                            <img src="" alt="foto_de_las_tarjetas"></li>
                            <span>TOTAL: ${total.toFixed(2)}</span>
                        </div>
                    </article>`;

    pagarProductos.appendChild(div);
});
// Mostrar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarMiCarrito();

    document.getElementById("tiendaDeProductos").addEventListener("click", function () {
        window.location.href = "productos.html";
    });
});

pagar()
*/