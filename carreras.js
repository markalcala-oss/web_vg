let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}


setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

function rotateMiniCarousel() {
    const miniCarousels = document.querySelectorAll('.mini-carousel');
    
    miniCarousels.forEach(carousel => {
        const miniSlides = carousel.querySelectorAll('.mini-slide');
        let currentMini = 0;
        
        miniSlides.forEach((slide, index) => {
            if (slide.classList.contains('active')) {
                currentMini = index;
            }
        });
        
        miniSlides[currentMini].classList.remove('active');
        
        currentMini = (currentMini + 1) % miniSlides.length;
        miniSlides[currentMini].classList.add('active');
    });
}

setInterval(rotateMiniCarousel, 3000);
