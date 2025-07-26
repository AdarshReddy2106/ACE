/**
 * Universal Navigation Handler
 * This script manages the mobile navigation menu and its dropdowns.
 * It is designed to work on all pages without interfering with desktop CSS hover effects.
 */
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');
    let isMobileMenuOpen = false;

    // Debug logging
    console.log('Navigation script loaded');
    console.log('Mobile menu button:', mobileMenuButton);
    console.log('Nav links:', navLinks);
    console.log('Dropdowns found:', dropdowns.length);
    console.log('Current window width:', window.innerWidth);

    // Helper function to check if device is mobile
    function isMobileDevice() {
        const isMobile = window.innerWidth <= 768;
        console.log('Is mobile device:', isMobile, 'Window width:', window.innerWidth);
        return isMobile;
    }

    // Helper function to close mobile menu
    function closeMobileMenu() {
        if (navLinks) {
            navLinks.classList.remove('active');
            isMobileMenuOpen = false;
            console.log('Mobile menu closed');
        }
        // Close all dropdowns when main menu closes
        dropdowns.forEach(d => d.classList.remove('active'));
    }

    // Helper function to update mobile menu button icon
    function updateMobileMenuIcon() {
        if (mobileMenuButton) {
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                icon.className = isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars';
                console.log('Mobile menu icon updated:', icon.className);
            }
        }
    }

    // 1. Toggle the main mobile menu
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Mobile menu button clicked');
            isMobileMenuOpen = !isMobileMenuOpen;
            navLinks.classList.toggle('active');
            updateMobileMenuIcon();
            
            // Prevent body scroll when menu is open
            if (isMobileMenuOpen) {
                document.body.style.overflow = 'hidden';
                console.log('Body scroll disabled');
            } else {
                document.body.style.overflow = '';
                console.log('Body scroll enabled');
            }
        });
    }

    // 2. Handle dropdown toggles on mobile devices
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        if (toggle) {
            toggle.addEventListener('click', (event) => {
                // This click-to-toggle logic only runs on screens 768px or less
                if (isMobileDevice()) {
                    event.preventDefault();
                    event.stopPropagation();
                    
                    console.log('Dropdown toggle clicked on mobile');
                    // Check if the dropdown we clicked is already open
                    const isAlreadyActive = dropdown.classList.contains('active');

                    // First, close all other dropdowns to avoid multiple open menus
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });

                    // Now, toggle the class for the clicked dropdown
                    dropdown.classList.toggle('active');
                    console.log('Dropdown toggled:', dropdown.classList.contains('active'));
                }
            });
        }
    });

    // 3. Close the mobile menu if a user clicks outside of it
    document.addEventListener('click', function(event) {
        if (navLinks && mobileMenuButton && isMobileMenuOpen) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnButton = mobileMenuButton.contains(event.target);

            // If the menu is active and the click is outside the nav and the button
            if (!isClickInsideNav && !isClickOnButton) {
                console.log('Click outside menu detected, closing mobile menu');
                closeMobileMenu();
                updateMobileMenuIcon();
                document.body.style.overflow = '';
            }
        }
    });

    // 4. Handle window resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        console.log('Window resized to:', window.innerWidth);
        // Debounce resize events
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // If screen becomes larger than mobile breakpoint, close mobile menu
            if (!isMobileDevice() && isMobileMenuOpen) {
                console.log('Screen size changed to desktop, closing mobile menu');
                closeMobileMenu();
                updateMobileMenuIcon();
                document.body.style.overflow = '';
            }
        }, 250);
    });

    // 5. Handle escape key to close mobile menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isMobileMenuOpen) {
            console.log('Escape key pressed, closing mobile menu');
            closeMobileMenu();
            updateMobileMenuIcon();
            document.body.style.overflow = '';
        }
    });

    // 6. Handle touch events for better mobile experience
    if ('ontouchstart' in window) {
        console.log('Touch device detected');
        // Add touch feedback for mobile menu items
        const mobileMenuItems = document.querySelectorAll('.nav-link, .dropdown-toggle');
        mobileMenuItems.forEach(item => {
            item.addEventListener('touchstart', function() {
                this.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
            });
            
            item.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 150);
            });
        });
    }

    // 7. Handle focus management for accessibility
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('focus', function() {
            this.setAttribute('aria-expanded', isMobileMenuOpen);
        });
    }

    // 8. Update aria attributes when menu state changes
    function updateAriaAttributes() {
        if (mobileMenuButton) {
            mobileMenuButton.setAttribute('aria-expanded', isMobileMenuOpen);
        }
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                const isActive = dropdown.classList.contains('active');
                toggle.setAttribute('aria-expanded', isActive);
            }
        });
    }

    // Call updateAriaAttributes whenever menu state changes
    const originalToggleActive = navLinks?.classList.toggle;
    if (navLinks && originalToggleActive) {
        navLinks.classList.toggle = function(...args) {
            const result = originalToggleActive.apply(this, args);
            updateAriaAttributes();
            return result;
        };
    }

    // 9. Initialize aria attributes
    updateAriaAttributes();
    console.log('Navigation initialization complete');
});