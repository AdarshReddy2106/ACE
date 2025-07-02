// Year filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const yearBtns = document.querySelectorAll('.year-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    yearBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedYear = this.getAttribute('data-year');
            
            // Update active button
            yearBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide gallery items
            galleryItems.forEach(item => {
                if (item.getAttribute('data-year') === selectedYear) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// Custom lightbox functionality
function openLightbox(imageSrc, caption) {
    const modal = document.getElementById('lightboxModal');
    const image = document.getElementById('lightboxImage');
    const captionEl = document.getElementById('lightboxCaption');
    
    image.src = imageSrc;
    captionEl.textContent = caption;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lightboxModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});