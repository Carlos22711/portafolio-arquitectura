document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de entrada para el Hero
    gsap.from(".fade-in", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Animación al hacer scroll para las secciones
    gsap.utils.toArray('.slide-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    });
});
