

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



      const input1 = document.getElementById('m-searchInput');
const dropdown1 = document.getElementById('m-suggestionDropdown');

input1.addEventListener('focus', () => {
    dropdown1.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
    const container = document.getElementById('m-search-container');
    if (!container.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

    $('#m-openSearch').click(function () {
      $('#m-searchOverlay').removeClass('hidden').addClass('block');
    });

    $('#m-closeSearch').click(function () {
      $('#m-searchOverlay').addClass('hidden').removeClass('block');
    });




});






function toggleFav(button) {
    const outline = button.querySelector('.outline-heart');
    const filled = button.querySelector('.filled-heart');

    outline.classList.toggle('hidden');
    filled.classList.toggle('hidden');
}













