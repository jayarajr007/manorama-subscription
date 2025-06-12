
$(window).on('load', function () {
    $('.single-issue-slider').slick({
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


  $('.sub-tab-btn').click(function () {
        var tabID = $(this).data('tab');

        $('.sub-tab-btn').removeClass('border-blue-500 text-blue-600 sub-active-tab');
        $(this).addClass('border-blue-500 text-blue-600 sub-active-tab');

        $('.sub-tab-content').addClass('hidden');
        $('#' + tabID).removeClass('hidden');
      });

   




    
});



