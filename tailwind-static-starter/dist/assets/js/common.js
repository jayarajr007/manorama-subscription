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
