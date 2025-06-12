
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


// tab function
  // const tabs = [
  //   { btn: 'subscription', content: 'subscriptioncontent' },
  //   { btn: 'renewal', content: 'renewalcontent' },
  //   { btn: 'singleissue', content: 'singleissuecontent' }
  // ];

  // function activateTab(activeId) {
  //   tabs.forEach(({ btn, content }) => {
  //     const btnEl = document.getElementById(btn);
  //     const contentEl = document.getElementById(content);
      
  //     if (btn === activeId) {
  //       btnEl.classList.add('text-blue-600', 'border-blue-500');
  //       btnEl.classList.remove('text-gray-500', 'border-transparent');
  //       contentEl.classList.remove('hidden');
  //     } else {
  //       btnEl.classList.remove('text-blue-600', 'border-blue-500');
  //       btnEl.classList.add('text-gray-500', 'border-transparent');
  //       contentEl.classList.add('hidden');
  //     }
  //   });
  // }


  // window.addEventListener('DOMContentLoaded', () => activateTab('subscription'));

  // tabs.forEach(({ btn }) => {
  //   document.getElementById(btn).addEventListener('click', () => activateTab(btn));
  // });
