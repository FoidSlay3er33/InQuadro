const buttons = document.querySelectorAll(".bottom-nav button");
const screens = document.querySelectorAll(".screen");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;

        // 🔴 NASCONDE TUTTE LE SCHERMATE
        screens.forEach(screen => {
            screen.style.display = "none";
        });

        // 🟢 MOSTRA SOLO QUELLA GIUSTA
        document.getElementById(target).style.display = "block";

        // 🔴 RESET BOTTONI
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // 🟢 ATTIVA QUELLO CLICCATO
        button.classList.add("active");

    });

});
