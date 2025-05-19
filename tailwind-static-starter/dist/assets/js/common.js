


$(window).on('load', function () {
    $('.slider').slick({
        slidesToShow: 5, // Show 5 items on large screens
        slidesToScroll: 1,
        dots: false,
        arrows: true, infinite: false,
        adaptiveHeight: false,
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
                settings: { slidesToShow: 2 }
            }
        ]
    });
});




//         $('.slider').on('setPosition', function () {
//   let maxHeight = 0;
//   $('.slider .slick-slide').each(function () {
//     $(this).css('height', 'auto');
//     if ($(this).outerHeight() > maxHeight) {
//       maxHeight = $(this).outerHeight();
//     }
//   });
//   $('.slider .slick-slide').css('height', maxHeight + 'px');
// });


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

function toggleFav(button) {
    const outline = button.querySelector('.outline-heart');
    const filled = button.querySelector('.filled-heart');

    outline.classList.toggle('hidden');
    filled.classList.toggle('hidden');
}

function showCategory() {
    document.getElementById('categoryMenu').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
}

function showMain(page) {
    document.getElementById('categoryMenu').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');

    // Optional: Change main content title if needed
    document.getElementById('mainContent').innerHTML = `<h1 class="text-2xl font-bold text-gray-700">${page.charAt(0).toUpperCase() + page.slice(1)} Content</h1>`;
}

// function showTab(tabId) {
//   const tabs = document.querySelectorAll('.tab-content');
//   tabs.forEach(tab => tab.classList.add('hidden'));
//   document.getElementById(tabId).classList.remove('hidden');
// }


function showTab(tabId, element) {
    // Hide all tab contents
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active-tab'));

    // Add active class to clicked button
    if (element) {
        element.classList.add('active-tab');
    }
}

window.onload = function () {
    const firstTabButton = document.querySelector('.tab-btn');
    if (firstTabButton) {
        firstTabButton.click();
    }
};




document.getElementById('category-close').addEventListener('click', function () { document.getElementById('categoryMenu').classList.add('hidden'); });





const input = document.getElementById('searchInput');
const dropdown = document.getElementById('suggestionDropdown');

input.addEventListener('focus', () => {
    dropdown.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
    const container = document.getElementById('search-container');
    if (!container.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});


