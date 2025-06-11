
$(document).ready(function () {
    // Open panel
    $("#openFilter").click(function () {

        $("#filterPanel").removeClass("hidden");

        $("#categories").removeClass("hidden");

        $(".subscription-navigation-mobile").hide();

    });

    $("#openSort").click(function () {

        $("#sortPanel").removeClass("hidden");



        $(".subscription-navigation-mobile").hide();

    });

    $("#closeSort").click(function () {

        $("#sortPanel").addClass("hidden");

        $(".subscription-navigation-mobile").show();

    });




    // Close panel
    $("#closeFilter").click(function () {
        $("#filterPanel").addClass("hidden");
        $(".subscription-navigation-mobile").show();
    });

    // Tab switch logic
    $(".tab-btn-filter").on("click", function () {
        var tab = $(this).data("tab");

        // Switch content
        $(".tab-content").addClass("hidden");
        $("#" + tab).removeClass("hidden");

        // Style active tab
        $(".tab-btn-filter").removeClass("border-l-2 font-semibold border-blue-600 bg-white text-black");
        $(this).addClass("border-l-2 font-semibold text-sm border-blue-600 bg-white text-black");
    });

    // Clear button
    $("#clearFilters").click(function () {
        alert("Filters cleared!");
        // add actual logic to reset filters if needed
    });

    // Done button
    $("#applyFilters").click(function () {
        $("#filterPanel").addClass("hidden");
        alert("Filters applied!");
        // add actual logic to apply filters if needed
    });
});


// document.getElementById("menu-toggle").addEventListener("click", function () {
//     document.getElementById("mobile-menu").classList.toggle("hidden");
// });



$(window).on('load', function () {

    $('.category-slider').slick({
        infinite: false,
        slidesToShow: 11,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1288,
                settings: {
                    slidesToShow: 9
                }
            },
            {
                breakpoint: 1066,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

   


    document.querySelectorAll('.accordion-toggle').forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');

            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    // Optional: Make all contents visible by default
    document.querySelectorAll('.accordion-content').forEach((el) => el.classList.remove('hidden'));






    document.querySelectorAll('.round-filter').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });



});


