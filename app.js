const YOUTUBE_URL = "https://m.youtube.com/";

function openYouTube() {
    window.location.replace(YOUTUBE_URL);
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .catch(error => {
                console.error("Error registrando Service Worker:", error);
            });
    });
}

openYouTube();
