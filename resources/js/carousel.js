let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let indicadores = document.getElementsByClassName("indicador");
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].className = indicadores[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    indicadores[slideIndex - 1].className += " active";
}