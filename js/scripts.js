// scripts.js


// scripts.js

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});




let lastScrollTop = 0; // Valor de desplazamiento inicial
const navbar = document.getElementById('navbar'); // Obtiene la navbar por su ID

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) { // Desplazamiento hacia abajo
    navbar.classList.add('hidden');
  } else { // Desplazamiento hacia arriba
    navbar.classList.remove('hidden');
  }
  lastScrollTop = scrollTop;
});





 

