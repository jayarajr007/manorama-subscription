/* ==========================================================
   1. HEADER: change colour when the page is scrolled
   ========================================================== */
const header = document.getElementById('header');

function updateHeader() {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeader);
updateHeader(); // run once when the page loads


/* ==========================================================
   2. MOBILE MENU: open and close
   ========================================================== */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

function openMenu() {
  nav.classList.add('open');
  document.body.classList.add('menu-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close menu');
}

function closeMenu() {
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}

menuToggle.addEventListener('click', function () {
  if (nav.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close the menu when a link inside it is clicked
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// Close the menu with the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});


/* ==========================================================
   3. ACTIVE MENU LINK: highlight the section you are viewing
   ========================================================== */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

function updateActiveLink() {
  let currentId = 'home';

  sections.forEach(function (section) {
    // A section counts as "current" once its top passes the middle of the screen
    if (section.getBoundingClientRect().top < window.innerHeight / 2) {
      currentId = section.id;
    }
  });

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();


/* ==========================================================
   4. PROJECT FILTER BUTTONS
   ========================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const filter = button.dataset.filter;

    // Highlight the clicked button
    filterButtons.forEach(function (b) {
      b.classList.remove('active');
    });
    button.classList.add('active');

    // Show matching projects, hide the rest
    projects.forEach(function (project) {
      if (filter === 'all' || project.dataset.category === filter) {
        project.classList.remove('hide');
      } else {
        project.classList.add('hide');
      }
    });
  });
});


/* ==========================================================
   5. "ENQUIRE" LINKS: pre-select the service in the form
   ========================================================== */
const serviceSelect = document.getElementById('service');

document.querySelectorAll('.service-link').forEach(function (link) {
  link.addEventListener('click', function () {
    serviceSelect.value = link.dataset.service;
  });
});


/* ==========================================================
   6. CONTACT FORM: check the fields, then send
   ========================================================== */
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

/*
   HOW TO CONNECT THE FORM:
   Right now no server is connected, so the form does NOT send anything by itself.
   Instead it opens the visitor's email app with the message already written.

   To send directly from the website, create a free form at https://formspree.io
   (or a similar service) and paste its address below, for example:
   const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
*/
const FORM_ENDPOINT = '';

const COMPANY_EMAIL = 'abdulazizinternationaltrading@gmail.com';

// Show or clear an error message under a field
function setError(input, message) {
  const field = input.closest('.field');
  const errorBox = field.querySelector('.error');
  errorBox.textContent = message;

  if (message) {
    field.classList.add('invalid');
  } else {
    field.classList.remove('invalid');
  }
}

// Check every required field. Returns true if all are OK.
function validateForm() {
  let isValid = true;

  const name = form.fullname.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.replace(/[^0-9]/g, ''); // keep digits only
  const service = form.service.value;
  const details = form.details.value.trim();

  if (name.length < 2) {
    setError(form.fullname, 'Please enter your full name.');
    isValid = false;
  } else {
    setError(form.fullname, '');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError(form.email, 'Please enter a valid email address.');
    isValid = false;
  } else {
    setError(form.email, '');
  }

  if (phone.length < 7 || phone.length > 15) {
    setError(form.phone, 'Please enter a valid phone number.');
    isValid = false;
  } else {
    setError(form.phone, '');
  }

  if (service === '') {
    setError(form.service, 'Please choose a service.');
    isValid = false;
  } else {
    setError(form.service, '');
  }

  if (details.length < 20) {
    setError(form.details, 'Please describe your project (at least 20 characters).');
    isValid = false;
  } else {
    setError(form.details, '');
  }

  return isValid;
}

// Build an email link containing everything the visitor typed
function buildEmailLink() {
  const subject = 'Project inquiry - ' + form.service.value;
  const body =
    'Name: ' + form.fullname.value + '\n' +
    'Company: ' + form.company.value + '\n' +
    'Email: ' + form.email.value + '\n' +
    'Phone: ' + form.phone.value + '\n' +
    'Service: ' + form.service.value + '\n\n' +
    'Project details:\n' + form.details.value;

  return 'mailto:' + COMPANY_EMAIL +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);
}

function showMessage(html) {
  formMessage.innerHTML = html;
  formMessage.classList.add('show');
}

form.addEventListener('submit', async function (event) {
  event.preventDefault(); // stop the page from reloading

  if (!validateForm()) {
    // Move the cursor to the first field with a problem
    form.querySelector('.invalid input, .invalid select, .invalid textarea').focus();
    return;
  }

  // No server connected: be honest and offer the email option
  if (FORM_ENDPOINT === '') {
    showMessage(
      '<strong>Your inquiry has not been sent yet.</strong><br>' +
      'Online sending is not set up. <a href="' + buildEmailLink() + '">Click here to send it by email</a> ' +
      'or call us on <a href="tel:+97470066632">+974 7006 6632</a>.'
    );
    return;
  }

  // Server connected: send the form
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      showMessage('<strong>Thank you!</strong> Your inquiry has been sent. Our team will contact you soon.');
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch (error) {
    showMessage(
      '<strong>Sorry, your inquiry could not be sent.</strong><br>' +
      'Please try again, or <a href="' + buildEmailLink() + '">send it by email</a>.'
    );
  }

  submitBtn.disabled = false;
  submitBtn.textContent = 'Send Inquiry';
});


/* ==========================================================
   7. FADE-IN ANIMATION when sections scroll into view
   ========================================================== */
const fadeItems = document.querySelectorAll(
  '.section .container > *, .service-card, .project, .why-item, .stat'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1 });

  fadeItems.forEach(function (item) {
    item.classList.add('fade');
    observer.observe(item);
  });
}


/* ==========================================================
   8. FOOTER: current year
   ========================================================== */
document.getElementById('year').textContent = new Date().getFullYear();
