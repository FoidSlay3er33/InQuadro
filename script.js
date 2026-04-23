document.addEventListener("DOMContentLoaded", () => {
    const screens = document.querySelectorAll(".screen");
    const navButtons = document.querySelectorAll(".top-nav button, .bottom-nav button");

    function showScreen(targetId) {
        screens.forEach(screen => {
            screen.classList.remove("active");
        });

        const targetScreen = document.getElementById(targetId);
        if (targetScreen) {
            targetScreen.classList.add("active");
        }

        navButtons.forEach(btn => {
            btn.classList.remove("active");
            if (btn.dataset.target === targetId) {
                btn.classList.add("active");
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            showScreen(button.dataset.target);
        });
    });

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Richiesta inviata!");
        });
    }

    showScreen("home");
});
