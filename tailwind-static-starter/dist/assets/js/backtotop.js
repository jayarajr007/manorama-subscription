

//back to top

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
//back to top end
