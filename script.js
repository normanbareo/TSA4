function showDetails(id) {
    const menuSection = document.getElementById("menu-section");
    menuSection.classList.add("darkened");
    menuSection.classList.add("hidden"); // Keep this to hide the grid
    document.querySelectorAll(".details").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}


function showMenu() {
    const menuSection = document.getElementById("menu-section");
    menuSection.classList.remove("hidden");
    menuSection.classList.remove("darkened");
    document.querySelectorAll(".details").forEach(section => {
        section.classList.add("hidden");
    });
}


