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