let logo = document.getElementById("logo-name");

function updateSize() {
    if (window.innerWidth < 575) {
        logo.innerText = "Szép Adrián";
    } else {
        logo.innerText = "Szép Adrián Attila";
    }
}

updateSize();
window.addEventListener("resize", updateSize);