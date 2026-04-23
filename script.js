function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.querySelectorAll(".bottom-nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    event.target.classList.add("active");
}
