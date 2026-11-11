// 1. Buscar elementos del DOM
const tarjeta = document.querySelector("#tarjeta");
const btnAzul = document.querySelector("#btn-azul");
const btnVerde = document.querySelector("#btn-verde");
const btnRojo = document.querySelector("#btn-rojo");
const btnRestablecer = document.querySelector("#btn-restablecer");

// 2. Escuchar los eventos click de cada botón
btnAzul.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "#007BFF";
    tarjeta.style.color = "white";
});

btnVerde.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "#28A745";
    tarjeta.style.color = "white";
});

btnRojo.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "#DC3545";
    tarjeta.style.color = "white";
});

btnRestablecer.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "#f0f0f0";
    tarjeta.style.color = "#333333";
});