






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

function showCategory() {
    document.getElementById('categoryMenu').classList.remove('hidden');
    // document.getElementById('mainContent').classList.add('hidden');
}

// function showMain(page) {
//     // document.getElementById('categoryMenu').classList.add('hidden');
//     // document.getElementById('mainContent').classList.remove('hidden');

//     // Optional: Change main content title if needed
//     // document.getElementById('mainContent').innerHTML = `<h1 class="text-2xl font-bold text-gray-700">${page.charAt(0).toUpperCase() + page.slice(1)} Content</h1>`;
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




// document.getElementById('category-close').addEventListener('click', function () { document.getElementById('categoryMenu').classList.add('hidden'); });












