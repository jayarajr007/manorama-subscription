

$( document ).ready(function() {

    const input = document.getElementById('searchInput');
const dropdown = document.getElementById('suggestionDropdown');

input.addEventListener('focus', () => {
    dropdown.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
    const container = document.getElementById('search-container');
    if (!container.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

    $('#openSearch').click(function () {
      $('#searchOverlay').removeClass('hidden').addClass('block');
    });

    $('#closeSearch').click(function () {
      $('#searchOverlay').addClass('hidden').removeClass('block');
    });



});






function toggleFav(button) {
    const outline = button.querySelector('.outline-heart');
    const filled = button.querySelector('.filled-heart');

    outline.classList.toggle('hidden');
    filled.classList.toggle('hidden');
}













