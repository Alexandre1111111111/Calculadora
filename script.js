const zero = document.querySelector("#zero");
const um = document.querySelector("#um");
const dois = document.querySelector("#dois");
const tres = document.querySelector("#tres");
const quatro = document.querySelector("#quatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const sete = document.querySelector("#sete");
const oito = document.querySelector("#oito");
const nove = document.querySelector("#nove");
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const vezes = document.querySelector("#vezes");
const divisao = document.querySelector("#divisao");
const clear = document.querySelector("#clear");
const CE = document.querySelector("#CE");
const igual = document.querySelector("#igual");
const telatxt = document.querySelector("#telatxt");
const abre = document.querySelector("#abre");
const fecha = document.querySelector("#fecha");
const raiz = document.querySelector("#raiz");
const elevado = document.querySelector("#elevado");

let num = 0;

const btns = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, mais, menos, vezes, divisao, clear, CE, abre, fecha, raiz, elevado, igual];

btns[0].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 1;
    telatxt.textContent = num;
})

btns[1].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 2;
    telatxt.textContent = num;
})

btns[2].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 3;
    telatxt.textContent = num;
})

btns[3].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 4;
    telatxt.textContent = num;
})

btns[4].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 5;
    telatxt.textContent = num;
})

btns[5].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 6;
    telatxt.textContent = num;
})

btns[6].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 7;
    telatxt.textContent = num;
})

btns[7].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 8;
    telatxt.textContent = num;
})

btns[8].addEventListener("click", () => {
    num = telatxt.textContent * 10 + 9;
    telatxt.textContent = num;
})

btns[9].addEventListener("click", () => {
    telatxt.textContent = num + " + ";
})

btns[10].addEventListener("click", () => {
    telatxt.textContent = num + " - ";
})

btns[11].addEventListener("click", () => {
    telatxt.textContent = num + " x ";
})

btns[12].addEventListener("click", () => {
    telatxt.textContent = num + " ÷ ";
})

btns[13].addEventListener("click", () => {

})

btns[14].addEventListener("click", () => {
    telatxt.textContent = "0";
    num = "";
})

btns[15].addEventListener("click", () => {
    num = "";
    telatxt.textContent = num + "(";
})

btns[16].addEventListener("click", () => {
    num = "";
    telatxt.textContent = num + ")";
})

btns[17].addEventListener("click", () => {
    num = "";
    telatxt.textContent = num + "√";
})

btns[18].addEventListener("click", () => {
    telatxt.textContent = num + "^";
})

btns[19].addEventListener("click", () => {
    
})