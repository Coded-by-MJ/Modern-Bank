document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to add or remove 'active' class based on section visibility
    const toggleActiveClass = (entries) => {
        entries.forEach(entry => {
            const targetId = `#${entry.target.id}`;
            const correspondingNavLink = document.querySelector(`nav ul li a[href="${targetId}"]`);

            if (entry.isIntersecting) {
                correspondingNavLink.classList.add('active');
            } else {
                correspondingNavLink.classList.remove('active');
            }
        });
    };

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(toggleActiveClass, { threshold: 0.5 });

    // Observe each section and footer
    document.querySelectorAll('section, footer').forEach(element => {
        observer.observe(element);
    });

    // Click event listener on navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
