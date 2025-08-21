// =======================
// Navbar Toggle
// =======================
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =======================
// Contact Form Submission
// =======================
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset(); // ✅ clear form fields
        status.style.display = "block";
        status.style.color = "green";
        status.style.background = "#e6f9e6";
        status.style.padding = "10px";
        status.style.borderRadius = "6px";
        status.innerText = "Message sent successfully! I will get back to you soon.";

        // Hide after 5 seconds
        setTimeout(() => {
          status.style.display = "none";
        }, 5000);

      } else {
        status.style.display = "block";
        status.style.color = "red";
        status.style.background = "#ffe6e6";
        status.style.padding = "10px";
        status.style.borderRadius = "6px";
        status.innerText = "Oops! Something went wrong. Please try again.";
      }
    } catch (error) {
      status.style.display = "block";
      status.style.color = "red";
      status.style.background = "#ffe6e6";
      status.style.padding = "10px";
      status.style.borderRadius = "6px";
      status.innerText = "Network error. Please try again.";
    }
  });
}
