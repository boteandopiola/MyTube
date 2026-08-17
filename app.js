if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            await navigator.serviceWorker.register("./sw.js");
            console.log("Service Worker registrado");
        } catch (error) {
            console.error("Error registrando Service Worker:", error);
        }
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        window.location.href = "https://m.youtube.com/";
    }, 300);
});
