document.addEventListener("DOMContentLoaded", function() {
  const BotonIz = document.querySelector(".prev");
  const BotonDe = document.querySelector(".next");
  const imagenes = document.querySelector(".carousel-items");
  
  function actualizarTransformacion() {
    const desplazamiento = -indiceActual * 100/12; // Desplazamiento en porcentaje
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
  }
  
  function actualizarTransformacionDerecha() { // Desplazamiento en porcentaje
    imagenes.style.transform = `translateX(${0}%)`;
  }

  let indiceActual = 0
  const cantidadImagenes = imagenes.querySelectorAll(".items").length ;
  BotonIz.addEventListener("click", () =>{
    if(indiceActual > 0){
      console.log(indiceActual)
      indiceActual--;
    }else {
      console.log(indiceActual)
      indiceActual = cantidadImagenes - 1; // Ir a la última imagen si estamos en la primera
    };
    actualizarTransformacion();

  });
  BotonDe.addEventListener("click", () =>{
    if(indiceActual < cantidadImagenes - 1){
      indiceActual++;
      console.log(indiceActual)
    } else {
      return actualizarTransformacionDerecha(); // Volver al inicio si estamos en la última imagen
    }
    actualizarTransformacion();
  });
});