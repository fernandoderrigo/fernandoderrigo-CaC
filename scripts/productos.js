// cargamos datos externos
const cargarProductos = async (rutaJson, tipoProducto) => {
  try {
    const response = await fetch(rutaJson);
    const data = await response.json();

    // agregamos datos a Html
    const listaProductos = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h3");
    titulo.innerHTML = tipoProducto;
    titulo.setAttribute("id", tipoProducto.toLowerCase());
    titulo.setAttribute("class", "tipo-producto");
    listaProductos.appendChild(titulo);

    data[tipoProducto.toLowerCase()].forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.setAttribute("alt", element.nombre);
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaProductos.appendChild(contenedor);
      contenedor.appendChild(prodCarousel);
      const titulo = document.createElement("h3");
      titulo.setAttribute("class", "card-title");
      titulo.textContent = element.nombre;
      prodCarousel.appendChild(titulo);
      const precio = document.createElement("p");
      precio.setAttribute("class", "card-text");
      precio.textContent = `$${element.precio}`;
      prodCarousel.appendChild(precio);
      const carrito = document.createElement("button");
      carrito.setAttribute("class", "btn-carrito");
      carrito.textContent = "Añadir al carrito";
      let imagenCarrito = document.createElement("img");
      imagenCarrito.setAttribute("class", "carrito");
      imagenCarrito.setAttribute("alt", "Añadir al carrito");
      imagenCarrito.src =
        "../assets/productos/MaterialSymbolsAddShoppingCart.png";
      carrito.appendChild(imagenCarrito);
      prodCarousel.appendChild(carrito);
      carrito.addEventListener("click", () => {
        agregarAlCarrito(element);
        mostrarToast(`${element.nombre} fue agregado al carrito`);
      });
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos de cada tipo de producto
cargarProductos("../assets/Productos/bombones.json", "Bombones");
cargarProductos("../assets/Productos/cajitas.json", "Cajitas");
cargarProductos(
  "../assets/Productos/figurasDeAzucar.json",
  "Figuras en Azucar"
);
cargarProductos(
  "../assets/Productos/figuraschocolate.json",
  "Figuras en Chocolate"
);
cargarProductos("../assets/Productos/flores.json", "Flores");
cargarProductos("../assets/Productos/huevos.json", "Huevos");
cargarProductos("../assets/Productos/mensajes.json", "Mensajes");
cargarProductos("../assets/Productos/ositos.json", "Ositos");
cargarProductos("../assets/Productos/paletitas.json", "Paletitas");

// Funcionalidad del carrito
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");
let total = 0;

function agregarAlCarrito(producto) {
  const { nombre, precio } = producto;

  const elementoCarrito = document.createElement("li");
  elementoCarrito.textContent = `${nombre} - $${precio.toFixed(2)}`;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () =>
    eliminarDelCarrito(elementoCarrito, precio)
  );

  elementoCarrito.appendChild(botonEliminar);
  listaCarrito.appendChild(elementoCarrito);

  total += precio;
  totalCarrito.textContent = total.toFixed(2);
}

function eliminarDelCarrito(elemento, precio) {
  listaCarrito.removeChild(elemento);
  total -= precio;
  totalCarrito.textContent = total.toFixed(2);
}

// Mostrar/ocultar carrito
const toggleCarritoButton = document.getElementById("toggle-carrito");
const carritoFlotante = document.getElementById("carrito-flotante");

toggleCarritoButton.addEventListener("click", () => {
  carritoFlotante.classList.toggle("hidden");
});

// Función para mostrar mensaje emergente (toast)
function mostrarToast(mensaje) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = mensaje;

  toastContainer.appendChild(toast);

  // Mostrar el toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Ocultar el toast después de 3 segundos
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 500);
  }, 3000);
}
