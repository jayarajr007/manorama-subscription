
        $(document).ready(function () {
            // Open panel
            $("#openFilter").click(function () {

                $("#filterPanel").removeClass("hidden");

                $("#categories").removeClass("hidden");

                $("#bottom-nav").hide();




            });

            // Close panel
            $("#closeFilter").click(function () {
                $("#filterPanel").addClass("hidden");
                $("#bottom-nav").show();
            });

            // Tab switch logic
            $(".tab-btn").on("click", function () {
                var tab = $(this).data("tab");

                // Switch content
                $(".tab-content").addClass("hidden");
                $("#" + tab).removeClass("hidden");

                // Style active tab
                $(".tab-btn").removeClass("border-l-2 font-semibold border-blue-600 bg-white text-black");
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

        });


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