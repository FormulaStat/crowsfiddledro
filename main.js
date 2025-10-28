/* ========================================
   Crowsfiddled Real Estate — Phase 2
   Dynamic + Animation Script
   ======================================== */

/* === Smooth Scroll Navigation === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* === Fade-in Animation on Scroll === */
const revealElements = document.querySelectorAll("section, .investment-card, .service-card, .testimonial");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

/* === Investment Section Dynamic Population === */
const investments = [
  {
    title: "Golden View Apartments",
    location: "Bucharest, Romania",
    priceRange: "€80,000 – €150,000",
    image: "images/golden-view.jpg",
    status: "Ongoing",
    description: "Modern apartment complex offering luxury living near downtown Bucharest."
  },
  {
    title: "Danube Horizon Villas",
    location: "Galați, Romania",
    priceRange: "€120,000 – €250,000",
    image: "images/danube-horizon.jpg",
    status: "Pre-Sale",
    description: "Exclusive waterfront villas designed for premium ROI and serene living."
  },
  {
    title: "Cluj Central Towers",
    location: "Cluj-Napoca, Romania",
    priceRange: "€100,000 – €220,000",
    image: "images/cluj-towers.jpg",
    status: "Under Construction",
    description: "High-rise investment property in Romania’s fast-growing tech city."
  }
];

const investmentGrid = document.querySelector(".investment-grid");

if (investmentGrid) {
  investments.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("investment-card");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p><strong>Location:</strong> ${project.location}</p>
      <p><strong>Price:</strong> ${project.priceRange}</p>
      <p>${project.description}</p>
      <span class="status ${project.status.toLowerCase()}">${project.status}</span>
    `;

    investmentGrid.appendChild(card);
  });
}

/* === Testimonials Auto Slider === */
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? "block" : "none";
  });
}

function nextTestimonial() {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showTestimonial(currentSlide);
}

if (testimonials.length > 0) {
  showTestimonial(currentSlide);
  setInterval(nextTestimonial, 5000);
}

/* === Contact Form (Basic Validation) === */
const contactForm = document.querySelector(".contact form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Message sent successfully! We'll get back to you soon.");
    contactForm.reset();
  });
}

/* === Status Badge Styling === */
const statusElements = document.querySelectorAll(".status");
statusElements.forEach(status => {
  if (status.textContent.includes("Ongoing")) {
    status.style.background = "green";
  } else if (status.textContent.includes("Pre-Sale")) {
    status.style.background = "orange";
  } else {
    status.style.background = "gray";
  }
  status.style.color = "white";
  status.style.padding = "5px 10px";
  status.style.borderRadius = "10px";
  status.style.fontSize = "0.8rem";
  status.style.display = "inline-block";
  status.style.marginBottom = "10px";
});

/* === Lazy Loading for Images === */
const lazyImages = document.querySelectorAll("img");

lazyImages.forEach(img => {
  img.loading = "lazy";
});
