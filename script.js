document.addEventListener('DOMContentLoaded', function() {
    // 1. JS Animáció a fő címsornál (a CSS-ben lévő @keyframes-t használja)
    const mainTitle = document.getElementById('main-title');
    // Az 'animate-in' osztály a CSS-ben definiált fadeInSlideUp animációt indítja el
    mainTitle.classList.add('animate-in');

    // 2. Elegáns görgetés a CTA gomboknál
    const ctaButtons = document.querySelectorAll('a.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Megakadályozza az alapértelmezett horgony ugrást
            e.preventDefault();

            // Kinyeri a cél ID-t a href attribútumból (pl. #elerhetoseg)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Elegáns görgetés a cél elemhez
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. ÚJ ANIMÁCIÓ: Görgetéskor megjelenő effektus (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Ha az elem láthatóvá válik, hozzáadjuk a 'show' osztályt
                entry.target.classList.add('show');
                // Ha egyszer már megjelent, nem kell újra figyelni
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Opciók: 0.1 azt jelenti, hogy 10% láthatóságnál már aktiválódik
        threshold: 0.1
    });

    // Megkeressük az összes "hidden" osztályú szekciót
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Figyeljük mindegyiket
    hiddenElements.forEach((el) => observer.observe(el));
});