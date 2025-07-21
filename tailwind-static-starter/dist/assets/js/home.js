
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
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480, // Extra small screens
                settings: { slidesToShow: 2 }
            }
        ]
    });

    
});

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
                settings: { slidesToShow: 3 }
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

             //autoplay: true,              // Enable auto slide
       // autoplaySpeed: 3000,         // Delay between slides in ms (3 seconds)

    });




});




//back to top

    const backToTopBtn = document.getElementById("backToTopBtn");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop && scrollTop > 100) {
        // Scrolling up
        backToTopBtn.classList.add("show");
      } else {
        // Scrolling down or at the top
        backToTopBtn.classList.remove("show");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
//back to top end












