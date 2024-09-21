document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const testimonialContainer = document.getElementById('testimonialContainer');
    
    let index = 0;
    const testimonials = testimonialContainer.children;
    const totalTestimonials = testimonials.length;
    const testimonialWidth = testimonials[0].offsetWidth; // Width of a single testimonial

    function showTestimonial(index) {
        const offset = -index * testimonialWidth;
        testimonialContainer.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', function() {
        index = (index > 0) ? index - 1 : totalTestimonials - 1;
        showTestimonial(index);
    });

    nextBtn.addEventListener('click', function() {
        index = (index < totalTestimonials - 1) ? index + 1 : 0;
        showTestimonial(index);
    });

        // Optional: Auto-slide functionality
    setInterval(() => {
        nextBtn.click();
    }, 50000); // Change slide every 30 seconds
});


