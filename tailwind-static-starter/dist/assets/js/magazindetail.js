$('.sub-tab-btn').click(function () {
    var tabID = $(this).data('tab');
    
    $('.sub-tab-btn').removeClass('border-blue-500 text-blue-600 sub-active-tab');
    $(this).addClass('border-blue-500 text-blue-600 sub-active-tab');
    
    $('.sub-tab-content').addClass('hidden');
    $('#' + tabID).removeClass('hidden');
    
    // Initialize or refresh slider only for the "single" tab
    if (tabID === 'single') {
        // Destroy existing slider if it exists
        if ($('.slider-singleissue').hasClass('slick-initialized')) {
            $('.slider-singleissue').slick('unslick');
        }
        
        // Initialize new slider
        $('.slider-singleissue').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true, 
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: { slidesToShow: 4 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 480,
                    settings: { slidesToShow: 4 }
                }
            ]
        });
    }
});