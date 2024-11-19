$(document).ready(function() {
    let currentSlide = 0;
    const slides = $(".slides");

    function showSlide(index) {
        slides.hide();
        $(slides[index]).fadeIn();
    }

    showSlide(currentSlide);

    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});
