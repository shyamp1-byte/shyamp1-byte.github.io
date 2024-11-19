$(document).ready(function() {
    console.log("jQuery Loaded");

    let currentSlide = 0;
    const slides = $(".slides");

    console.log("Slides: ", slides);

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

