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




document.getElementById('category-close').addEventListener('click', function () { document.getElementById('categoryMenu').classList.add('hidden'); });








const openBtn = document.getElementById("openAccount");
const sheet = document.getElementById("accountSheet");
const content = document.getElementById("accountContent");
const closeBtn = document.getElementById("closeSheet");

openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 🚫 stop <a href="#"> from scrolling

  sheet.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // 🚫 disable background scroll
  document.documentElement.style.overflow = "hidden"; // extra lock for mobile
  setTimeout(() => content.classList.remove("translate-y-full"), 10);
});

function closeSheet() {
  content.classList.add("translate-y-full");
  setTimeout(() => {
    sheet.classList.add("hidden");
    document.body.style.overflow = ""; 
    document.documentElement.style.overflow = ""; // ✅ restore scroll
  }, 300);
}

closeBtn.addEventListener("click", closeSheet);

// Close when clicking outside
sheet.addEventListener("click", (e) => {
  if (e.target === sheet) {
    closeSheet();
  }
});


