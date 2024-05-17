//cargamos datos externos
const bombones = async () => {
  try {
    const response = await fetch("../assets/Productos/bombones.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Bombones";
    listaBombones.appendChild(titulo);

    data.bombones.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
bombones();

//cargamos datos externos cajitas
const cajitas = async () => {
  try {
    const response = await fetch("../assets/Productos/cajitas.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Cajitas";
    listaBombones.appendChild(titulo);

    data.cajitas.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
cajitas();

const figurasAzucar = async () => {
  try {
    const response = await fetch("../assets/Productos/figurasDeAzucar.json");
    const data = await response.json();
    console.log(data);
    console.log(data.figurasAzucar);
    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Figuras en Azucar";
    listaBombones.appendChild(titulo);

    data["Figuras en azucar"].forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
figurasAzucar();

const figurasChocolate = async () => {
  try {
    const response = await fetch("../assets/Productos/figuraschocolate.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Figuras en Chocolate";
    listaBombones.appendChild(titulo);

    data["Figuras en Chocolate"].forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
figurasChocolate();

const flores = async () => {
  try {
    const response = await fetch("../assets/Productos/flores.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Flores";
    listaBombones.appendChild(titulo);

    data.flores.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
flores();

const huevos = async () => {
  try {
    const response = await fetch("../assets/Productos/huevos.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Huevos";
    listaBombones.appendChild(titulo);

    data.Huevos.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
huevos();

const mensajes = async () => {
  try {
    const response = await fetch("../assets/Productos/mensajes.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Mensajes";
    listaBombones.appendChild(titulo);

    data.mensajes.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
mensajes();

const ositos = async () => {
  try {
    const response = await fetch("../assets/Productos/ositos.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Ositos";
    listaBombones.appendChild(titulo);

    data.ositos.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
ositos();

const paletitas = async () => {
  try {
    const response = await fetch("../assets/Productos/paletitas.json");
    const data = await response.json();

    // agregamos datos a Html
    const listaBombones = document.querySelector(".nuestros-productos");
    const titulo = document.createElement("h2");
    titulo.innerHTML = "Paletitas";
    listaBombones.appendChild(titulo);

    data.paletitas.forEach((element) => {
      const contenedor = document.createElement("div");
      contenedor.setAttribute("class", "card");
      contenedor.setAttribute("style", "width: 18rem;");
      const imagen = document.createElement("img");
      imagen.setAttribute("class", "card-img-top");
      imagen.src = element.img;
      contenedor.appendChild(imagen);
      const prodCarousel = document.createElement("div");
      prodCarousel.setAttribute("class", "card-body");
      listaBombones.appendChild(contenedor);
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
      carrito.setAttribute("class", "btn btn-primary");
      carrito.textContent = "Añadir al carrito";
      prodCarousel.appendChild(carrito);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

// Llama a la función para cargar los datos
paletitas();
