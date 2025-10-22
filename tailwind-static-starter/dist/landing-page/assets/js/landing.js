 // Tabs
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("text-blue-600", "border-b-2", "border-blue-600"));
        tab.classList.add("text-blue-600", "border-b-2", "border-blue-600");

        contents.forEach(c => c.classList.add("hidden"));
        document.getElementById(tab.dataset.tab).classList.remove("hidden");
      });
    });

    // Quantity
    let qty = 1;
    document.querySelectorAll(".qty-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === "-" && qty > 1) qty--;
        if (btn.textContent === "+") qty++;
        document.getElementById("qty").textContent = qty;
      });
    });



      // FAQ Toggle Logic
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");

      // Toggle visibility
      content.classList.toggle("hidden");

      // Change +/-
      if (icon.textContent === "+") {
        icon.textContent = "–";
      } else {
        icon.textContent = "+";
      }
    });
  });






