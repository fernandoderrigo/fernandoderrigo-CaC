// const datos = async () =>
//   await fetch("../assets/Productos/bombones.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.bombones.forEach((element) => {
//         console.log(element);
//       });
//     });

// // Cargar Bombones
// console.log(datos);
const datos = async () => {
  try {
    const response = await fetch("../assets/Productos/bombones.json");
    const data = await response.json();

    // Supongamos que tienes una lista en tu HTML con el ID "lista-bombones"
    const listaBombones = document.querySelector(".nuestros-productos");

    data.bombones.forEach((element) => {
      const li = document.createElement("div");
      li.textContent = element.nombre;
      listaBombones.appendChild(li);
      const imagen = document.createElement("img");
      imagen.src = element.img;
      li.appendChild(imagen);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
datos();
