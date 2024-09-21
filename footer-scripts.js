// Example: Alert user on newsletter form submission (optional)
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('.footer-section.newsletter form');
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for subscribing to my newsletter!");
    });
});
