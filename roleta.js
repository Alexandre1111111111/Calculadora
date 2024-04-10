const roleta = document.querySelector(".roleta");
const girar = document.querySelector("#girar");
const rolimg = document.querySelector("#rolimg");

let random;

function trcrol() {
    calculadora.style.display = "none";
    roleta.style.display = "flex";
}

function rodar() {
    random = Math.floor(Math.random() * 150 * 200);
    rolimg.style.rotate = `${random}deg`;
}

btnrng.addEventListener("click", trcrol);

girar.addEventListener("click", rodar);