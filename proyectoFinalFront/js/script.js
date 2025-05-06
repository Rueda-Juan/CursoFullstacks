//---Contacto.html-----------------------------------------------------------------------
function validarForm(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  let validacion = true;

  if (!nombre.value.match(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/)) {
    alert("El nombre solo debe contener letras y/o espacios");
    validacion = false;
  }

  if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    alert("Por favor ingrese un correo valido");
    validacion = false;
  }

  if (validacion) {
    document.getElementById('btn-submit');
    const form = document.getElementById('form-data');
    if (form.checkValidity()) {
      alert('Se enviaron los datos correctamente');
      form.reset();
    }
  }

}

//---Buscador-----------------------------------------------------------------------
//Script de buscador de productos
function normalizar(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

document.getElementById('buscadorProducto').addEventListener('submit', function (e) {
  e.preventDefault();
  //Diccionario de productos
  //Clave: nombre buscado , valor: archivo HTML
  const productos = {
    "celular": "/CursoFullstacks/proyectoFinalFront/html/productos/TecnologiaCelular.html",
    "heladera": "/CursoFullstacks/proyectoFinalFront/html/productos/TecnologiaHeladera.html",
    "horno": "/CursoFullstacks/proyectoFinalFront/html/productos/TecnologiaHorno.html",
    "lavarropas": "/CursoFullstacks/proyectoFinalFront/html/productos/TecnologiaLavarropas.html",
    "notebook": "/CursoFullstacks/proyectoFinalFront/html/productos/TecnologiaNotebook.html",
    "tablet": "/CursoFullstacks/proyectoFinalFront/html/productos/TecnologiaTablet.html",
  };

  //Obtengo la busqueda del usuario
  const busqueda = document.getElementById('inputProducto').value.trim();

  const normalizada = normalizar(busqueda);


  //busqueda secuencial, encontrar primer coincidencia exacta
  for (let clave in productos) {
    if (normalizar(clave) === normalizada) {
      window.location.href = productos[clave];
      return;
    }
  }

  //busqueda secuencial, encontrar coincidencia parcial (primer match en letras)
  for (let clave in productos) {
    if (normalizar(clave).includes(normalizada)) {
      window.location.href = productos[clave];
      return;
    }
  }

  alert("Producto no encontrado");
})
//---Productos-----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {

  const comprarBtn = document.getElementById('comprarBtn');
  const calificacion = document.getElementById('calificacion');

  comprarBtn.addEventListener('click', function () {
    alert('Gracias Por Su Compra!');
    if (calificacion.style.display === 'none' || calificacion.style.display === '') {
      calificacion.style.display = 'block';
    } else {
      calificacion.style.display = 'none';
    }
  });

  const stars = document.querySelectorAll('.estrellas i');
  stars.forEach(star => {
    star.addEventListener('click', function () {
      const rating = parseInt(this.getAttribute('data-rating'));

      stars.forEach(s => {
        s.classList.remove('bi-star-fill');
        s.classList.add('bi-star');
      });

      for (let i = 0; i < rating; i++) {
        stars[i].classList.remove('bi-star');
        stars[i].classList.add('bi-star-fill');
      }
    });
  });

  const enviarReview = document.getElementById('enviarReview');
  enviarReview.addEventListener('click', function () {
    const filledStars = document.querySelectorAll('.estrellas .bi-star-fill').length;

    if (filledStars === 0) {
      alert('Por favor selecciona una calificación con las estrellas');
      return;
    }

    // Aquí podrías enviar los datos a un servidor
    alert(`Gracias por tu calificación de ${filledStars} estrellas y tu comentario!`);
    calificacion.style.display = 'none';
  });
});