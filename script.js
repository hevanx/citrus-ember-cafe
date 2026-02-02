// Citrus & Ember Café - JavaScript Enhancements

document.addEventListener('DOMContentLoaded', function () {

    // 1. Set current year in footer copyright
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Add shadow to header on scroll
    const header = document.querySelector('.site-header');
    if (header) {
        const scrollThreshold = 10;

        function updateHeaderShadow() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        }

        // Check on load (in case page loads scrolled)
        updateHeaderShadow();

        // Listen for scroll with passive flag for performance
        window.addEventListener('scroll', updateHeaderShadow, { passive: true });
    }

    // 3. Simple contact form handling (demo only - no backend)
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Hide form, show success message
            contactForm.hidden = true;
            formSuccess.hidden = false;

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});
