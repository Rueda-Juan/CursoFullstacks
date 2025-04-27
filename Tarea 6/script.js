//--Carrusel.html-----------------------------------------------------------------------
const botonAtras = document.getElementById('botonAtras');
const botonAdelante = document.getElementById('botonAdelante');
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const punto1 = document.getElementById("punto1");
const punto2 = document.getElementById("punto2");
const punto3 = document.getElementById("punto3");

let contImg = 1;

function actualizarImagen() {
  img1.classList.remove("imgActiva");
  img2.classList.remove("imgActiva");
  img3.classList.remove("imgActiva");
  punto1.classList.remove("puntoActivo");
  punto2.classList.remove("puntoActivo");
  punto3.classList.remove("puntoActivo");


  if (contImg === 1) {
    img1.classList.add("imgActiva");
    punto1.classList.add("puntoActivo");
  } else if (contImg === 2) {
    img2.classList.add("imgActiva");
    punto2.classList.add("puntoActivo");
  } else if (contImg === 3) {
    img3.classList.add("imgActiva");
    punto3.classList.add("puntoActivo");
  }
}

botonAdelante.addEventListener('click', function () {
  contImg++;
  if (contImg > 3) {
    contImg = 1;
  }
  actualizarImagen()
});

botonAtras.addEventListener('click', function () {
  contImg--;
  if (contImg < 1) {
    contImg = 3;
  }
  actualizarImagen()
});
//---Contacto.html-----------------------------------------------------------------------
function validarForm(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const texto = document.getElementById("texto");
  let validacion = true;

  if (!nombre.value.match(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/)) {
    alert("El nombre solo debe contener letras y/o espacios");
    validacion = false;
  }

  if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    alert("Por favor ingrese un correo valido");
    validacion = false;
  }

  if (texto.value.match('')) {
    alert("Por favor ingrese un mensaje");
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