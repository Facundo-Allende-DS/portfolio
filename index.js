let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="nav-responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function siguienteImagen() {
    $('#carouselExampleIndicators').carousel('next');
  }

  // Función para cambiar a la imagen anterior del carrusel
  function imagenAnterior() {
    $('#carouselExampleIndicators').carousel('prev');
  }

  document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Captura los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;

    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en la página
    // Por ejemplo, puedes usar una función fetch() para enviarlos a un servidor.
    // fetch('url_del_servidor', {
    //     method: 'POST',
    //     body: JSON.stringify({ nombre, telefono, correo, tema, mensaje }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(function (response) {
    //     // Manejar la respuesta del servidor aquí
    // });

    // Para este ejemplo, simplemente mostraremos una alerta con los datos
    alert("Nombre: " + nombre + "\nTeléfono: " + telefono + "\nCorreo: " + correo + "\nTema: " + tema + "\nMensaje: " + mensaje);
});