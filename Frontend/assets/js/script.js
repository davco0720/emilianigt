//     Desplazamiento de la pagina cuando se presiona el nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/*Agregar o quitar la clase de modo oscuro cuando se presiona el boton*/
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;


const toggleButton2 = document.getElementById('boton1');

// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén el botón que abre el modal
var btn = document.getElementById("openModal");

// Obtén el <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Verificar si el usuario ya tiene una preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Modo claro';
}


toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');

  // Guardar la preferencia del usuario
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = 'Modo claro';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = 'Modo oscuro';
  }
});

const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false
})


  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()