
    //---------------CARRITO DE PRODUCTOS-------------------------

    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; //Traigo mi carrito desde el local storage

    const productos = [
        {id:1568, nombre:"Auricular", marca:"Apple", valor:452361, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1846, nombre:"Smartwatch", marca:"Apple", valor:856390, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1849, nombre:"Paleta", marca:"Adidas", valor:362171, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:568, nombre:"Auricular2", marca:"Xiaomi", valor:85000, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:10, nombre:"Smartwatch", marca:"Xiaomi", valor:326361, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1263, nombre:"Paleta", marca:"Babolat", valor:296328, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1567, nombre:"Auricular", marca:"Apple", valor:452361, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1845, nombre:"Smartwatch", Marca:"Apple", valor:856390, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1848, nombre:"Paleta", marca:"Adidas", valor:362171, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:567, nombre:"Auricular2", marca:"Xiaomi", valor:85000, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:119, nombre:"Smartwatch", marca:"Xiaomi", valor:326361, cuotas:6, img:"imagenes/CeldaMT.webp"},
        {id:1262, nombre:"Paleta", marca:"Babolat", valor:296328, cuotas:6, img:"imagenes/CeldaMT.webp"},
    ]

    function imprimirProductos() {
        const listadoDeProductos = document.getElementById("listadoDeProductos");
        console.log(listadoDeProductos);
        listadoDeProductos.innerHTML = "";

        productos.forEach(producto => {
            const div = document.createElement("div");
            div.innerHTML = `<div class="card" style="width: 300px; height: 500px">
                                <div class="cardborder">
                                    <img src="${producto.img}" class="card-img-top" alt="foto_del_producto_1">
                                    <div class="card-body">
                                        <h3 class="card-text">${producto.nombre} - ${producto.marca}</h3>
                                        <ul>
                                            <li>Precio: ${producto.valor}</li>
                                            <li>Cuotas: ${producto.cuotas} sin interés</li>
                                        </ul>
                                        <div class="btncomprar">
                                                <button id="${producto.id}" class="botonComprar">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

            listadoDeProductos.appendChild(div);
            
            let button = document.getElementById(`${producto.id}`)
            button.addEventListener("click", () => AgregarAlCarrito(producto.id));
        })
    }

    let agregar = document.getElementById("agregar")

    function AgregarAlCarrito(productoId) {
        //primero busco el producto a agregar por su id
        const productoElegido = productos.find(producto => producto.id === productoId);
        const verificarExistencia = carrito.some(producto => producto.id === productoId);
        if(!verificarExistencia) {
            carrito.push({...productoElegido, cantidad: 1});
            localStorage.setItem("carrito", JSON.stringify(carrito));
            //alert("Se agrego producto al carrito");
            Swal.fire({
                title: "Se agregó el producto al carrito",
                width: 600,
                padding: "3em",
                color: "green",
                imageUrl: "imagenes/ok verde.webp",
                imageWidth: 180,
                imageHeight: 150,
                imageAlt: "signo de ok",
                draggable: true,
                backdrop: `rgba(167,219,167,0.8)`
              });
            console.log(carrito);
        }
        else {
            Swal.fire({
                title: "El producto ya se encuentra en el carrito",
                width: 600,
                padding: "3em",
                color: "orange",
                imageUrl: "imagenes/admiracion.png",
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: "signo de admiracion",
                draggable: true,
                backdrop: `rgba(228,210,9,0.4)`
              });
        }
    }
    imprimirProductos();

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("verCarrito").addEventListener("click", function () {
            window.location.href = "miCarrito.html";
        });
    });