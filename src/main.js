"use strict";
const cabecera = document.getElementById("navbarDiv");
document.addEventListener("scroll", function () {
    if (cabecera && cabecera instanceof HTMLDivElement) {
        if (window.scrollY > 5) {
            cabecera.style.backgroundColor = "#5468ff";
        }
        else {
            cabecera.style.backgroundColor = "transparent";
        }
    }
});
