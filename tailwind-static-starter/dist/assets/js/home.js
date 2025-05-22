$(window).on('load', function () {
    $('.slider-my-digital-purchases').slick({
        slidesToShow: 5, // Show 5 items on large screens
        slidesToScroll: 1,
        dots: false,
        arrows: true, infinite: false,
        centerMode: false,  // Disable to prevent extra space
        variableWidth: false, // Ensure uniform width


        responsive: [
            {
                breakpoint: 1024, // Medium screens
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768, // Small screens
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480, // Extra small screens
                settings: { slidesToShow: 3 }
            }
        ]
    });


  $('.main-banner').slick({
        slidesToShow: 1, // Show 5 items on large screens
        slidesToScroll: 1,
        dots: true,
        arrows: true, infinite: false,
        centerMode: false,  // Disable to prevent extra space
        variableWidth: false, // Ensure uniform width

    });




});



const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll("[data-index]").forEach((dot, index) => {
        dot.classList.toggle("bg-gray-900", index === currentIndex);
        dot.classList.toggle("bg-gray-300", index !== currentIndex);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.querySelectorAll("[data-index]").forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute("data-index"));
        updateCarousel();
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 5000);

updateCarousel(); // Initialize













