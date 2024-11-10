var slidePosition = 1;
SlideShow(slidePosition);

// controles atras adelante
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  controles de carrusel
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

// Función para abrir la ventana modal
function openModal(src, footerText) {
    document.getElementById("modal-image").src = src;
    document.getElementById("modal-footer").textContent = footerText; // establecer pie de imagen dinamico
    document.getElementById("modal").showModal();
    }

// Función para cerrar la ventana modal
function closeModal() {
      document.getElementById("modal").close();
    }