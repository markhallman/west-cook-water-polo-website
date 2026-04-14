// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuToggle && mobileMenu && hamburgerIcon && closeIcon) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('active');
            
            if (isOpen) {
                mobileMenu.classList.remove('active');
                hamburgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            } else {
                mobileMenu.classList.add('active');
                hamburgerIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a, button');
        mobileMenuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
