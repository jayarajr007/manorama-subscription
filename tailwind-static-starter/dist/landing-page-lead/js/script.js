// ==========================================
//  INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  function initScrollToTop(backgroundColor, color) {
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.id = "scrollToTopBtn";
    scrollToTopBtn.style.backgroundColor = backgroundColor || "#007bff";
    scrollToTopBtn.style.color = color || "#fff";

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
      } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  initScrollToTop("#2563eb", "#fff");

  function closeSuccessModal() {
    document.getElementById("customModal").classList.add("hidden");
  }

  // Close modal when clicking outside
  document
    .getElementById("customModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeSuccessModal();
      }
    });

  // Close modal when clicking close button
  const closeButton = document.getElementById("closeButton");
  if (closeButton) {
    closeButton.addEventListener("click", closeSuccessModal);
  }
});

// ==========================================
// MOBILE NAVIGATION
// ==========================================
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu-overlay");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenuBackdrop = document.getElementById("mobile-menu-backdrop");
const mobileMenuPanel = document.getElementById("mobile-menu-panel");

function openMobileMenu() {
  if (mobileMenu && mobileMenuPanel) {
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      mobileMenuPanel.classList.remove("translate-x-full");
    }, 10);
  }
}

function closeMobileMenu() {
  if (mobileMenu && mobileMenuPanel) {
    mobileMenuPanel.classList.add("translate-x-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  }
}

if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", openMobileMenu);
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", closeMobileMenu);
}

if (mobileMenuBackdrop) {
  mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
}

// Close menu when clicking on navigation links
document
  .querySelectorAll('#mobile-menu-overlay a[href^="#"]')
  .forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

// Close menu on escape key
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    mobileMenu &&
    !mobileMenu.classList.contains("hidden")
  ) {
    closeMobileMenu();
  }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        closeMobileMenu();
      }
    }
  });
});

// ==========================================
// FAQ ACCORDION
// ==========================================
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  if (question && answer && icon) {
    question.addEventListener("click", () => {
      const isOpen = !answer.classList.contains("hidden");

      // Close all other FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-answer").classList.add("hidden");
          otherItem.querySelector(".faq-icon").textContent = "+";
        }
      });

      // Toggle current FAQ
      answer.classList.toggle("hidden");
      icon.textContent = isOpen ? "+" : "−";
    });
  }
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100");
      entry.target.classList.remove("opacity-0");
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-animate").forEach((el) => {
  el.classList.add("opacity-0", "transition-opacity", "duration-700");
  observer.observe(el);
});

// ==========================================
// READ MORE FUNCTIONALITY FOR PROGRAM CARDS
// ==========================================
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('read-more-btn')) {
    const container = e.target.closest('.description-container');
    const truncated = container.querySelector('.truncated-text');
    const full = container.querySelector('.full-text');
    if (full.classList.contains('hidden')) {
      full.classList.remove('hidden');
      truncated.classList.add('hidden');
      e.target.textContent = 'Read Less';
    } else {
      full.classList.add('hidden');
      truncated.classList.remove('hidden');
      e.target.textContent = 'Read More';
    }
  }
});

// ==========================================
// FORM VALIDATION
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const heroForm = document.getElementById("hero-form");
  const nameInput = document.getElementById("name");
  const mobileInput = document.getElementById("mobile");
  const emailInput = document.getElementById("email");
  const courseInput = document.getElementById("course");

  const nameError = document.getElementById("nameError");
  const mobileError = document.getElementById("mobileError");
  const emailError = document.getElementById("emailError");
  const courseError = document.getElementById("courseError");

  // Validation functions
  function validateName() {
    const name = nameInput.value.trim();
    if (name === "") {
      showError(nameError, "Full name is required");
      return false;
    }
    if (name.length < 2) {
      showError(nameError, "Name must be at least 2 characters");
      return false;
    }
    hideError(nameError);
    return true;
  }

  function validateMobile() {
    const mobile = mobileInput.value.trim();
    const mobileRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (mobile === "") {
      showError(mobileError, "Phone number is required");
      return false;
    }
    if (!mobileRegex.test(mobile.replace(/[\s\-\(\)]/g, ""))) {
      showError(mobileError, "Please enter a valid phone number");
      return false;
    }
    hideError(mobileError);
    return true;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      showError(emailError, "Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      showError(emailError, "Please enter a valid email address");
      return false;
    }
    hideError(emailError);
    return true;
  }

  function validateCourse() {
    const course = courseInput.value;
    if (!course) {
      showError(courseError, "Please select a course type");
      return false;
    }
    hideError(courseError);
    return true;
  }

  function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
    errorElement.previousElementSibling.classList.add("border-red-500");
  }

  function hideError(errorElement) {
    errorElement.classList.add("hidden");
    errorElement.previousElementSibling.classList.remove("border-red-500");
  }

  // Show modal function
  function showModal(title, message, link, buttonText) {
    const customModal = document.getElementById("customModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const modalButton = document.getElementById("modalButton");
    const closeButton = document.getElementById("closeButton");

    if (customModal) {
      customModal.classList.add("flex");
      customModal.classList.remove("hidden");
    }
    if (modalTitle) modalTitle.textContent = title;
    if (modalMessage) modalMessage.textContent = message;
    if (modalButton) {
      modalButton.textContent = buttonText;
      modalButton.onclick = function() {
        window.location.href = link;
      };
    }
    if (closeButton) {
      closeButton.onclick = function() {
        if (customModal) {
          customModal.classList.add("hidden");
          customModal.classList.remove("flex");
        }
      };
    }
  }

  // Real-time validation
  nameInput.addEventListener("blur", validateName);
  mobileInput.addEventListener("blur", validateMobile);
  emailInput.addEventListener("blur", validateEmail);
  courseInput.addEventListener("change", validateCourse);

  // Form submission
  heroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isMobileValid = validateMobile();
    const isEmailValid = validateEmail();
    const isCourseValid = validateCourse();

    if (isNameValid && isMobileValid && isEmailValid && isCourseValid) {
      // Form is valid, show success modal
      showModal(
        "Thank you!",
        "We will contact you soon...",
        "https://www.manoramahorizon.com/",
        "Go to Website"
      );

      // Reset form
      heroForm.reset();

      // Hide errors
      hideError(nameError);
      hideError(mobileError);
      hideError(emailError);
      hideError(courseError);
    }
  });
});