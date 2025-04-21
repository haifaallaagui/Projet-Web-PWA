function function_OfflineLoad() {

    console.log("Start")
// On va tester si le navigateur supporte les service worker ou non
    if ("serviceWorker" in navigator) {
    // S'il le supporte alors on passe à l'enregistrement du service worker
        navigator.serviceWorker.register("sw.js");
    } else {
        console.warn('Not supported')
    }
}

// l'événement c'est le chargement (load) de la page web
window.addEventListener("load", function_OfflineLoad);