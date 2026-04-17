// SCROLL SMOOTH
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// CTA
document.getElementById("cta-btn").addEventListener("click", () => {
    document.getElementById("intro")
        .scrollIntoView({ behavior: "smooth" });
});

// FORM
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Richiesta inviata! Ti contatteremo presto.");
});

// ANIMAZIONE SCROLL
const sections = document.querySelectorAll(".section");

const reveal = () => {
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", reveal);

// Stato iniziale
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(60px)";
    sec.style.transition = "all 0.7s ease";
});