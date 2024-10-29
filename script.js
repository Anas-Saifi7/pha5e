
document.addEventListener('DOMContentLoaded', () => {
    // Initial GSAP Animation for Hero Text and Images
    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1 });
    gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to(".hero-image", { opacity: 1, scale: 1, duration: 1, delay: 1 });

    // Mouse movement effect on hero images
    document.querySelectorAll('.hero-image').forEach((image) => {
        image.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
            gsap.to(image, { x: x, y: y, duration: 0.3 });
        });

        image.addEventListener('mouseleave', () => {
            gsap.to(image, { x: 0, y: 0, duration: 0.3 });
        });
    });
});