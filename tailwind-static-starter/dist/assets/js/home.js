
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

    });




});














