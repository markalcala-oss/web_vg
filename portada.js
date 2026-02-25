
document.addEventListener('DOMContentLoaded', () => {
    const btnIngresar = document.getElementById('btnIngresar');
    const landingContainer = document.getElementById('landing');

    if (btnIngresar && landingContainer) {
        btnIngresar.addEventListener('click', () => {
            landingContainer.classList.add('fade-out');

            setTimeout(() => {
                console.log("Redirigiendo al inicio...");
                window.location.href = '../inicio/inicio.html';
            }, 600);
        });
    }
});