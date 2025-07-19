/**
 * Universal Navigation Handler
 * This script manages the mobile navigation menu and its dropdowns.
 * It is designed to work on all pages without interfering with desktop CSS hover effects.
 */
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');

    // 1. Toggle the main mobile menu
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Handle dropdown toggles on mobile devices
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        if (toggle) {
            toggle.addEventListener('click', (event) => {
                // This click-to-toggle logic only runs on screens 768px or less
                if (window.innerWidth <= 768) {
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
                }
            });
        }
    });

    // 3. Close the mobile menu if a user clicks outside of it
    document.addEventListener('click', function(event) {
        if (navLinks && mobileMenuButton) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnButton = mobileMenuButton.contains(event.target);

            // If the menu is active and the click is outside the nav and the button
            if (navLinks.classList.contains('active') && !isClickInsideNav && !isClickOnButton) {
                navLinks.classList.remove('active');
                // Also close any open dropdowns when the main menu closes
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        }
    });
});