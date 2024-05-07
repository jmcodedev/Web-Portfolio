var cabecera = document.getElementById("navbarDiv");
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
var handleCopyMail = function () {
    var emailLink = document.getElementById("emailLink");
    if (emailLink !== null &&
        emailLink !== undefined &&
        emailLink instanceof HTMLParagraphElement) {
        emailLink.addEventListener("click", function (event) {
            event.preventDefault();
            copyClipboard("joan@jmcode.dev");
            emailLink.textContent = "¡Copiado!";
            setTimeout(function () {
                emailLink.textContent = "joan@jmcode.dev";
            }, 3000);
        });
    }
    var copyClipboard = function (text) {
        var areaTexto = document.createElement("textarea");
        areaTexto.value = text;
        document.body.appendChild(areaTexto);
        areaTexto.select();
        document.execCommand("copy");
        document.body.removeChild(areaTexto);
    };
};
document.addEventListener("DOMContentLoaded", handleCopyMail);
