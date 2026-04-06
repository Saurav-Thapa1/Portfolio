// Scroll to Projects Section
document
  .getElementById("viewProjectsBtn")
  .addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });

// Animate Contact heading lines on scroll
const contactHeading = document.querySelector(".contact-heading");
const contactLines = contactHeading.querySelectorAll(".line");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contactLines.forEach((line) => (line.style.width = "100%"));
      }
    });
  },
  { threshold: 0.3 },
);

contactObserver.observe(contactHeading);

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button after scrolling down 100px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
