navbar = document.getElementById("navbar")
pagine = navbar.getElementsByTagName("a")

for (let i = 0; i < pagine.length; i++) {
    const element = pagine[i];
    
    // Confronta il percorso corrente con l'URL della pagina
    const currentPage = window.location.pathname.split("/").pop(); // Ottieni l'ultima parte dell'URL
    const linkPage = element.href.split("/").pop(); // Ottieni l'ultima parte dell'URL del link
    
    if (linkPage === currentPage) {
        element.id = "current";
    }
}