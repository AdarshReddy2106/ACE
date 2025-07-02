// This script handles the mobile navigation menu and dropdowns for activities and team sections
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }

    // Dropdown toggles for mobile
    dropdowns.forEach(drop => {
        const toggle = drop.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', function(e) {
            // Only handle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                // Toggle only this dropdown
                drop.classList.toggle('active');
                // Close others
                dropdowns.forEach(other => {
                    if (other !== drop) other.classList.remove('active');
                });
            }
        });
    });

    // Close nav/dropdowns when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!navLinks.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                navLinks.classList.remove('active');
                dropdowns.forEach(drop => drop.classList.remove('active'));
            }
        }
    });
});

// jQuery for dropdowns, gallery filtering, and smooth scrolling
$(document).ready(function() {
    // Dropdown functionality
    function toggleDropdown(dropdownId) {
        const dropdown = $('#' + dropdownId);
        const isVisible = dropdown.hasClass('show');
        $('.dropdown-menu').removeClass('show');
        if (!isVisible) {
            dropdown.addClass('show');
        }
    }

    // Activities dropdown toggle
    $('#activitiesToggle').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown('activitiesMenu');
    });

    // Team dropdown toggle
    $('#teamToggle').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown('teamMenu');
    });

    // Close dropdowns when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });

    // Prevent dropdown from closing when clicking inside the dropdown menu
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

    // Close dropdown when clicking on a link inside it
    $('.dropdown-menu a').click(function() {
        $('.dropdown-menu').removeClass('show');
    });

    // Gallery filtering
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        if (filter === 'all') {
            $('.gallery-item').show();
        } else {
            $('.gallery-item').hide();
            $('.' + filter).show();
        }
    });

    // Smooth scrolling only for anchor links (links starting with #)
    $('.nav-link').click(function(e) {
        const href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(href).offset().top - 70
            }, 500);
        }
    });
});