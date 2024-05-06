// JavaScript

// Array para almacenar los productos agregados al carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
  // Buscar si el producto ya está en el carrito
  const productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

  if (productoExistente) {
    // Si el producto ya está en el carrito, aumenta su cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no está en el carrito, agrégalo con cantidad 1
    carrito.push({ nombre: nombreProducto, cantidad: 1 });
  }

  // Actualizar el contenido del carrito en la interfaz
  mostrarCarrito();
}

// Función para mostrar el contenido del carrito en la interfaz
function mostrarCarrito() {
  const carritoContainer = document.querySelector('.carrito-container');
  carritoContainer.innerHTML = '';

  carrito.forEach(producto => {
    const productoHTML = `
      <div class="carrito-item">
        <p>${producto.nombre} - Cantidad: ${producto.cantidad}</p>
      </div>
    `;
    carritoContainer.innerHTML += productoHTML;
  });
}

// Event listener para el botón "Agregar al carrito"
const botonesAgregarAlCarrito = document.querySelectorAll('.btn-add-to-cart');
botonesAgregarAlCarrito.forEach(boton => {
  boton.addEventListener('click', () => {
    const nombreProducto = boton.parentNode.querySelector('p').textContent;
    agregarAlCarrito(nombreProducto);
  });
});
