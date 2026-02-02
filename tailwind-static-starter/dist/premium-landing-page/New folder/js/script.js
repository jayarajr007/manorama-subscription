document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('active');

    // Close all FAQs (optional – comment this if you want multiple open)
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.style.display = 'none';
    });

    // Toggle current
    if (!isOpen) {
      btn.classList.add('active');
      answer.style.display = 'block';
    }
  });
});




  $('.testimonial-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    stickyCta.classList.add('show');
  } else {
    stickyCta.classList.remove('show');
  }
});




  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

