// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Lightbox functionality
    const serviceImages = document.querySelectorAll('.service-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');

    serviceImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImage.src = image.src;
            caption.textContent = image.alt;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Service card details
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            alert(card.getAttribute('data-details'));
        });
    });

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});





// Scroll Reveal Animation
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-info');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
        aboutSection.classList.add('active');
    } else {
        aboutSection.classList.remove('active');
    }
});

