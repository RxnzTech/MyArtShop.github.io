// Add animations when scrolling to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const paintings = document.querySelectorAll('.painting');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const paintingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('painting-visible');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    paintings.forEach(painting => {
        paintingObserver.observe(painting);
    });
});
