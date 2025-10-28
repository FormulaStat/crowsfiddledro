// -------------------------
// CROWSFIDDLED ESTATE MAIN.JS
// -------------------------

// ✅ Navbar Toggle (Mobile)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// ✅ Smooth Scroll for Internal Links
const navLinks = document.querySelectorAll("a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Close menu on mobile after click
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ✅ Sticky Navbar with Shadow on Scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// ✅ Scroll Reveal Animations
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
revealOnScroll();

// ✅ Animated Counters for Statistics Section
const counters = document.querySelectorAll(".counter");
const speed = 150;

window.addEventListener("scroll", countUp);

function countUp() {
  const triggerHeight = window.innerHeight / 1.1;
  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < triggerHeight) {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    }
  });
}

// ✅ Hero Background Animation
const hero = document.querySelector(".hero");
if (hero) {
  let x = 0;
  setInterval(() => {
    x += 1;
    hero.style.backgroundPosition = `${x}px ${x / 2}px`;
  }, 60);
}

// ✅ Fade-in on Page Load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ✅ Simple Contact Form (No backend)
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;
    const message = contactForm.querySelector("textarea[name='message']").value;

    if (name && email && message) {
      alert(`Thank you ${name}, your message has been received!`);
      contactForm.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
          }
