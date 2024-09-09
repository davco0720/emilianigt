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
  interval: 1000,
  touch: false
})