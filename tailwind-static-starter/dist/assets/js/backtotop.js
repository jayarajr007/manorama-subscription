document.addEventListener("DOMContentLoaded", () => {
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
});
// New script
    // hide scroll on search is displayed
    const searchOverlay = document.getElementById('m-searchOverlay');
    const openSearchBtn = document.getElementById('m-openSearch'); 
    const closeSearchBtn = document.getElementById('m-closeSearch');   
    openSearchBtn?.addEventListener('click', () => {
        searchOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); 
    });
    closeSearchBtn?.addEventListener('click', () => {
        searchOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden'); 
    });


// hide scroll on category is displayed
    const categoryMenu = document.getElementById('categoryMenu');
    const openCategoryBtn = document.getElementById('mobcate');
    const closeCategoryBtn = document.getElementById('category-close');
    openCategoryBtn?.addEventListener('click', () => {
      categoryMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
    closeCategoryBtn?.addEventListener('click', () => {
      categoryMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });

// menu item highlight 
document.querySelectorAll('.dropdown-group').forEach(group => {
    const button = group.querySelector('.dropdown-button');
    const menu = group.querySelector('.dropdown-menu');

    group.addEventListener('mouseenter', () => {
      button.classList.add('text-blue-500');
      menu.classList.remove('hidden');
    });

    group.addEventListener('mouseleave', () => {
      button.classList.remove('text-blue-500');
      menu.classList.add('hidden');
    });
});    