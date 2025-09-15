// StreamLine Landing Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add fade-in class to elements and observe them
  const animateElements = document.querySelectorAll(
    ".card, .hero-section h1, .hero-section p"
  );
  animateElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Navbar background change on scroll
});

// Mobile menu close on link click
const mobileNavLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");
const bootstrap = window.bootstrap; // Declare the bootstrap variable

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

// Button click animations
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Create ripple effect
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Pricing card hover effects
const pricingCards = document.querySelectorAll(".pricing-card");

pricingCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    if (this.classList.contains("popular")) {
      this.style.transform = "scale(1.05)";
    } else {
      this.style.transform = "translateY(0) scale(1)";
    }
  });
});

// Form validation (if forms are added later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Lazy loading for images
const images = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

// Console welcome message

// Add ripple effect CSS dynamically
const style = document.createElement("style");
style.textContent = `
      .btn {
          position: relative;
          overflow: hidden;
      }
      
      .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
      }
      
      @keyframes ripple-animation {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
  `;
document.head.appendChild(style);

// =========== selector code =================
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    // remove active from all
    document
      .querySelectorAll("[data-filter]")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let filter = button.getAttribute("data-filter");
    document.querySelectorAll(".testimonial").forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ==============hedaer change

window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ========Back to top button=======

window.onscroll = function () {
  toggleTopButton();
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleTopButton() {
  const button = document.getElementById("back-to-up");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.classList.remove("d-none");
  } else {
    button.classList.add("d-none");
  }
}

// <!-- Custom JavaScript for the animation sequence -->

const chatIcon = document.getElementById("chatIcon");
const typingIcon = document.getElementById("typingIcon");
const chatTooltip = document.getElementById("chatTooltip");
const closeTooltip = document.getElementById("closeTooltip");

// Show chat icon after 5 seconds
setTimeout(() => {
  chatIcon.classList.remove("d-none");
  chatIcon.classList.add("d-block");
}, 5000);

// Show typing icon 10 seconds after page load
setTimeout(() => {
  typingIcon.classList.remove("d-none");
  typingIcon.classList.add("d-block");
}, 15000);

// Show tooltip 7 seconds after typing icon appears
setTimeout(() => {
  typingIcon.classList.remove("d-block");
  typingIcon.classList.add("d-none");

  chatTooltip.classList.remove("d-none");
  chatTooltip.classList.add("d-block");
}, 22000);

// Close tooltip on click
closeTooltip.addEventListener("click", () => {
  chatTooltip.classList.remove("d-block");
  chatTooltip.classList.add("d-none");
});

// ====video play youtube==========
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

// When a play button is clicked
document.querySelectorAll(".play-video").forEach((button) => {
  button.addEventListener("click", () => {
    const videoUrl = button.getAttribute("data-video");
    videoFrame.src = videoUrl + "?autoplay=1";
  });
});

// When modal closes → stop the video
videoModal.addEventListener("hidden.bs.modal", () => {
  videoFrame.src = "";
});

// =================================image animation

document.addEventListener("DOMContentLoaded", function () {
  const heroImg = document.querySelector(".hero-img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroImg.classList.add("animate");
          observer.unobserve(heroImg); // stop observing after animation
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% is visible
  );

  observer.observe(heroImg);
});

// =================toggle header====

document.addEventListener("DOMContentLoaded", function () {
  // Ensure bootstrap's Collapse class is available
  if (typeof bootstrap === "undefined" || !bootstrap.Collapse) return;

  const collapseEl = document.getElementById("navbarNav");
  const closeBtn = document.getElementById("navCloseBtn");

  // Create a Collapse instance without toggling immediately
  const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });

  // Close when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", () => bsCollapse.hide());
  }

  // Also close when user clicks any nav-link (mobile UX)
  document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      // only attempt to hide if collapse is currently shown (mobile)
      if (collapseEl.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });

  // Optional: close menu when clicking outside of it on mobile
  document.addEventListener("click", (e) => {
    const isClickInside =
      collapseEl.contains(e.target) || e.target.closest(".navbar-toggler");
    if (!isClickInside && collapseEl.classList.contains("show")) {
      bsCollapse.hide();
    }
  });
});

// ========rain animation=====
const drops = document.querySelectorAll(".drop");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        drops.forEach((drop) => (drop.style.animationPlayState = "running"));
        observer.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector("#rainSection"));

// <!-- JavaScript Scroll Trigger -->

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach((fader) => observer.observe(fader));
});
