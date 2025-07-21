
$(window).on('load', function () {
    $('.related-products-slider').slick({
        slidesToShow: 5, // Show 5 items on large screens
        slidesToScroll: 1,
        dots: false,
        arrows: true, infinite: false,
        adaptiveHeight: false,
        centerMode: false,  // Disable to prevent extra space
        variableWidth: false, // Ensure uniform width


        responsive: [
            {
                breakpoint: 1024, // Medium screens
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768, // Small screens
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480, // Extra small screens
                settings: { slidesToShow: 2 }
            }
        ]
    });




      $('.large-thumb-slider').slick({
        slidesToShow: 1, // Show 5 items on large screens
        slidesToScroll: 1,
        dots: true,
        arrows: true, infinite: true,
        adaptiveHeight: false,
        centerMode: false,  // Disable to prevent extra space
        variableWidth: false, // Ensure uniform width
       // autoplay: true,              // Enable auto slide
       // autoplaySpeed: 2000,  


    });




    
});


   //share dropdown
  function toggleShareDropdown() {
    const dropdown = document.querySelector('.share-dropdown');
    dropdown.classList.toggle('hidden');
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Link copied to clipboard!");
    });
  }

  // Optional: Click outside to close
  document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.share-dropdown');
    const button = e.target.closest('button[aria-label="Share this book"]');
    if (!dropdown.contains(e.target) && !button) {
      dropdown.classList.add('hidden');
    }
  });




// preview slider image

  const images = document.querySelectorAll(".large-thumb-slider img");
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");
  const closeBtn = document.getElementById("closePopup");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
      popup.classList.remove("hidden");
      popup.classList.add("flex");
    });
  });

  function showImage(index) {
    popupImg.src = images[index].src;
  }

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popup.classList.add("hidden");
  });






  //readmore auther text
    const para = document.getElementById('about-product');
    const button = document.getElementById('toggleButton');

    const clone = para.cloneNode(true);
    clone.style.visibility = 'hidden';
    clone.style.position = 'absolute';
    clone.style.height = 'auto';
    clone.style.maxWidth = para.offsetWidth + 'px';
    clone.style.lineHeight = getComputedStyle(para).lineHeight;
    clone.style.whiteSpace = 'normal';
    clone.style.width = para.offsetWidth + 'px';
    clone.style.font = getComputedStyle(para).font;
    document.body.appendChild(clone);

    const lineHeight = parseFloat(getComputedStyle(para).lineHeight);
    const fullLines = Math.round(clone.offsetHeight / lineHeight);
    document.body.removeChild(clone);

    if (fullLines > 4) {
      para.classList.add('line-clamp-4');
      button.classList.remove('hidden');
    }

    if (fullLines <= 2) {
      button.classList.add('hidden');
    }

    let expanded = false;
    button.addEventListener('click', () => {
      expanded = !expanded;
      para.classList.toggle('line-clamp-4', !expanded);
      button.textContent = expanded ? 'Show less' : 'Read more';
    });

