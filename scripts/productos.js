//carga datos externos
const datos = function () {
  //let contenido = document.querySelector(".nuestros-productos");
  fetch("./assets/Productos/productos.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
console.log(datos());
//cargarProductos(contenido, data))
//creacion y carga html
// function cargarProductos(contenido, data) {
//   for (let d of data) {
//     let producto = document.createElement("div");
//     let titulo = document.createElement("h2");
//     titulo.innerHTML = d.nombre;
//     let imagen = document.createElement("div");
//     for (let i of d.img) {
//       let img = document.createElement("img");
//       img.src = i;
//       imagen.appendChild(img);
//     }
//     producto.append(titulo, imagen);
//     contenido.appendChild(producto);
//   }
// }
