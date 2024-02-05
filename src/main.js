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
const handleCopyMail = () => {
    const emailLink = document.getElementById("emailLink");
    if (emailLink !== null &&
        emailLink !== undefined &&
        emailLink instanceof HTMLParagraphElement) {
        emailLink.addEventListener("click", function (event) {
            event.preventDefault();
            copyClipboard("joan@jmcode.dev");
            emailLink.textContent = "¡Copiado!";
            setTimeout(() => {
                emailLink.textContent = "joan@jmcode.dev";
            }, 3000);
        });
    }
    const copyClipboard = (text) => {
        const areaTexto = document.createElement("textarea");
        areaTexto.value = text;
        document.body.appendChild(areaTexto);
        areaTexto.select();
        document.execCommand("copy");
        document.body.removeChild(areaTexto);
    };
};
const triggerClick = () => {
    const headerLinks = document.querySelectorAll(".header-link");
    headerLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            if (targetId !== null && targetId !== undefined) {
                scrollHasta(targetId.substring(1));
            }
        });
    });
    const btnContacto = document.getElementById("contact");
    if (btnContacto && btnContacto instanceof HTMLButtonElement) {
        btnContacto.addEventListener("click", function () {
            scrollHasta("contacto");
        });
    }
};
const scrollHasta = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetId) {
        const offsetTop = targetElement === null || targetElement === void 0 ? void 0 : targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
};
const cargaDom = () => {
    handleCopyMail;
};
document.addEventListener("DOMContentLoaded", handleCopyMail);
