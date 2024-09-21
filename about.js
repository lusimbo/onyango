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
