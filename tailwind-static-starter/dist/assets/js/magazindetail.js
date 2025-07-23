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
            infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
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
                    settings: { slidesToShow: 3 }
                }
            ]
        });
    }
});



$(window).on('load', function () {
    $('.related-products-slider').slick({
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




      $('.large-thumb-slider').slick({
        slidesToShow: 1, // Show 5 items on large screens
        slidesToScroll: 1,
        dots: true,
        arrows: true, infinite: false,
        adaptiveHeight: false,
        centerMode: false,  // Disable to prevent extra space
        variableWidth: false, // Ensure uniform width


    });




    
});


   //share dropdown
  function toggleShareDropdown() {
    const dropdown = document.querySelector('.share-dropdown');
    dropdown.classList.toggle('hidden');
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Link copied to clipboard!");
    });
  }

  // Optional: Click outside to close
  document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.share-dropdown');
    const button = e.target.closest('button[aria-label="Share this book"]');
    if (!dropdown.contains(e.target) && !button) {
      dropdown.classList.add('hidden');
    }
  });




        
  