$(document).ready(function () {
    // Common function for handling search dropdown behavior
    function setupSearch(inputId, dropdownId, containerId) {
        const input = document.getElementById(inputId);
        const dropdown = document.getElementById(dropdownId);
        const container = document.getElementById(containerId);

        if (!input || !dropdown || !container) return; // safety check

        input.addEventListener('focus', () => {
            dropdown.classList.remove('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    }

    // Initialize search dropdowns for desktop and mobile
    setupSearch('searchInput', 'suggestionDropdown', 'search-container');
    setupSearch('m-searchInput', 'm-suggestionDropdown', 'm-search-container');

    // Overlay open/close for desktop
    $('#openSearch').click(function () {
        $('#searchOverlay').removeClass('hidden').addClass('block');
    });

    $('#closeSearch').click(function () {
        $('#searchOverlay').addClass('hidden').removeClass('block');
    });

    // Overlay open/close for mobile
    $('#m-openSearch').click(function () {
        $('#m-searchOverlay').removeClass('hidden').addClass('block');
    });

    $('#m-closeSearch').click(function () {
        $('#m-searchOverlay').addClass('hidden').removeClass('block');
    });
});

// Favorite toggle function remains same
function toggleFav(button) {
    const outline = button.querySelector('.outline-heart');
    const filled = button.querySelector('.filled-heart');

    outline.classList.toggle('hidden');
    filled.classList.toggle('hidden');
}


// menu item highlight 
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-group').forEach(group => {
    const button = group.querySelector('.dropdown-button');
    const menu = group.querySelector('.dropdown-menu');

    if (!button || !menu) return;

    group.addEventListener('mouseenter', () => {
      button.classList.add('text-blue-500');
    });

    group.addEventListener('mouseleave', () => {
      button.classList.remove('text-blue-500');
    });
  });
});
  



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
