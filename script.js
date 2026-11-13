// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update the footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Prepare a message in the visitor's default email application.
// Replace the address below with your real email address.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const portfolioEmail = "your-email@example.com";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    if (portfolioEmail === "your-email@example.com") {
      formNote.textContent = "Please update portfolioEmail in script.js with your email address before using this form.";
      return;
    }

    window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
  });
}
