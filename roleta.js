const roleta = document.querySelector(".roleta");
const girar = document.querySelector("#girar");
const rolimg = document.querySelector("#rolimg");

let graus = -1;

function trcrol() {
    calculadora.style.display = "none";
    roleta.style.display = "flex";
}

function rodar() {
    graus += Math.round(75 * 10 * Math.random() * 10) * -1;
    rolimg.style.rotate = `${graus}deg`;
}

btnrng.addEventListener("click", trcrol);

girar.addEventListener("click", rodar);