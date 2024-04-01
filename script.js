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
const recap = document.querySelector("#recap");
const negativo = document.querySelector("#negativo");
const virgula = document.querySelector("#virgula");
const configs = document.querySelector("#configs");
const configimg = document.querySelector("#configimg");
const ccls = document.querySelector(".ccls");
const sha = document.querySelector("#sha");

let num = BigInt(0);
let op = 0;
let num2 = "";
let simb;
let res = 0;
let n1 = 0;
let n2 = 0.1;
let def;
let inpar = false;
let par = false;
let conpar = "";
let npar = 0;
let nparc = 0;
let dcm = false;

const btns = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, zero, mais, menos, vezes, divisao, clear, CE, abre, fecha, raiz, elevado, igual, negativo, virgula];

const som1 = new Audio('click.mp3');

const sons = [som1];

for (let i = 0; i < 10; i++) {
    btns[i].addEventListener("click", () => {
        if (nparc != 0 && telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")") {
            mult();
        }
        if(n2 == 0 && telatxt.textContent != op) {
            telatxt.textContent = telatxt.textContent.slice(0, -1);
            n2 = 0.1;
        }
        if(telatxt.textContent == res) {
            clr();
        }
    })
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        if(telatxt.textContent.length > 12) {
            telatxt.style.fontSize = "5vh";
        }
        else {
            telatxt.style.fontSize = "6vh";
        }
        telatxt.style.color = "rgb(90, 248, 248)";
        telatxt.style.textShadow = "0px 5px 5px #1900ff";
        sons[0].currentTime = 0;
        sons[0].play();
        console.log(num2);
        console.log(conpar);
        console.log(n1);
        console.log(typeof(n1));
    })
}

for (let i = 10; i <= 13; i++) {
    btns[i].addEventListener("click", () => {
        if(n2 != 0.1 || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")" && nparc == 0) {
            conta();
        }
    })
}

btns[19].addEventListener("click", () => {
    if(n2 != 0.1 || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")" && nparc == 0) {
        conta();
    }
})

window.addEventListener("keydown", tcl);

function conta() {
    n1 *= 1;
    n2 *= 1;
    if(telatxt.textContent != res) {
    if(npar != 0) {
        for(npar; npar > 0; npar--) {
            par2();
        }
    }
    if(telatxt.textContent != res && telatxt.textContent != op) {
        recap.textContent = telatxt.textContent;
    }
    if(par) {
        n2 = eval(conpar);
    }
    if(n2 != 0.1 || !par) {
        switch (simb) {
            case "+":
                if(res == 0) {
                    res = n1 + n2;
                }
                else {
                    res += n2;
                }
                telatxt.textContent = res;
                if(telatxt.textContent.length > 12) {
                    telatxt.style.fontSize = "35px";
                }
                n2 = 0.1;
            break;
            case "-":
                if(res == 0) {
                    res = n1 - n2;
                }
                else {
                    res -= n2;
                }
                telatxt.textContent = res;
                if(telatxt.textContent.length > 12) {
                    telatxt.style.fontSize = "35px";
                }
                n2 = 0.1;
            break;
            case "x":
                if(res == 0) {
                    res = n1 * n2;
                }
                else {
                    res *= n2;
                }
                telatxt.textContent = res;
                if(telatxt.textContent.length > 12) {
                    telatxt.style.fontSize = "35px";
                }
                n2 = 0.1;
            break;
            case "÷":
                if (n2 != 0) {
                if(res == 0) {
                    res = n1 / n2;
                }
                else {
                    res /= n2;
                }
                telatxt.textContent = res;
                if(telatxt.textContent.length > 12) {
                    telatxt.style.fontSize = "35px";
                }
                n2 = 0.1;
                }
                else {
                    telatxt.textContent = "Math Error";
                }
            break;
            case "^":
                if(res == 0) {
                    res = n1 ** n2;
                }
                else {
                    res **= n2;
                }
                telatxt.textContent = res;
                if(telatxt.textContent.length > 12) {
                    telatxt.style.fontSize = "35px";
                }
                n2 = 0.1;
            break;
        }
    }
    if(simb == "√") {
        if(res == 0) {
            res = Math.sqrt(n1);
        }
        else {
            res = Math.sqrt(res);
        }
        telatxt.textContent = res;
        if(telatxt.textContent.length > 12) {
            telatxt.style.fontSize = "35px";
        }
        n2 = 0.1;
        simb = "";
    }
    op = 0;
    inpar = false;
    conpar = "";
    par = false;
    npar = 0;
    num2 = "";
}
}

function clr() {
    telatxt.textContent = "0";
    recap.textContent = "";
    num = BigInt(0);
    op = 0;
    num2 = "";
    simb = "";
    res = 0;
    n1 = 0;
    n2 = 0.1;
    def = 0;
    inpar = false;
    par = false;
    conpar = "";
    npar = 0;
    nparc = 0;
    dcm = false;
    telatxt.style.fontSize = "60px";
    telatxt.style.color = "rgb(90, 248, 248)";
    telatxt.style.textShadow = "0px 5px 5px #1900ff";
}

function one() {
    if(telatxt.textContent == 0) {
        num = 1;
        n1 = 1;
        telatxt.textContent = 1;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 1;
        num = telatxt.textContent + 1;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 1;
        n2 = def;
        }
        else {
            n2 = n2 * 10;
        }
        }
        else {
            def = conpar + 1;
            conpar = def;
        }
        num2 = telatxt.textContent + 1;
        telatxt.textContent = num2;
    }
}
function two() {
    if(telatxt.textContent == 0) {
        num = 2;
        n1 = 2;
        telatxt.textContent = 2;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 2;
        num = telatxt.textContent + 2;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 2;
        n2 = def;
        }
        else {
            n2 = n2 * 20;
        }
        }
        else {
            def = conpar + 2;
            conpar = def;
        }
        num2 = telatxt.textContent + 2;
        telatxt.textContent = num2;
    }
}
function three() {
    if(telatxt.textContent == 0) {
        num = 3;
        n1 = 3;
        telatxt.textContent = 3;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 3;
        num = telatxt.textContent + 3;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 3;
        n2 = def;
        }
        else {
            n2 = n2 * 30;
        }
        }
        else {
            def = conpar + 3;
            conpar = def;
        }
        num2 = telatxt.textContent + 3;
        telatxt.textContent = num2;
    }
}
function four() {
    if(telatxt.textContent == 0) {
        num = 4;
        n1 = 4;
        telatxt.textContent = 4;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 4;
        num = telatxt.textContent + 4;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 4;
        n2 = def;
        }
        else {
            n2 = n2 * 40;
        }
        }
        else {
            def = conpar + 4;
            conpar = def;
        }
        num2 = telatxt.textContent + 4;
        telatxt.textContent = num2;
    }
}
function five() {
    if(telatxt.textContent == 0) {
        num = 5;
        n1 = 5;
        telatxt.textContent = 5;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 5;
        num = telatxt.textContent + 5;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 5;
        n2 = def;
        }
        else {
            n2 = n2 * 50;
        }
        }
        else {
            def = conpar + 5;
            conpar = def;
        }
        num2 = telatxt.textContent + 5;
        telatxt.textContent = num2;
    }
}
function six() {
    if(telatxt.textContent == 0) {
        num = 6;
        n1 = 6;
        telatxt.textContent = 6;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 6;
        num = telatxt.textContent + 6;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 6;
        n2 = def;
        }
        else {
            n2 = n2 * 60;
        }
        }
    else {
        def = conpar + 6;
        conpar = def;
    }
        num2 = telatxt.textContent + 6;
        telatxt.textContent = num2;
    }
}
function seven() {
    if(telatxt.textContent == 0) {
        num = 7;
        n1 = 7;
        telatxt.textContent = 7;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 7;
        num = telatxt.textContent + 7;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 7;
        n2 = def;
        }
        else {
            n2 = n2 * 70;
        }
    }
    else {
        def = conpar + 7;
        conpar = def;
    }
        num2 = telatxt.textContent + 7;
        telatxt.textContent = num2;
    }
}
function eight() {
    if(telatxt.textContent == 0) {
        num = 8;
        n1 = 8;
        telatxt.textContent = 8;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 8;
        num = telatxt.textContent + 8;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 8;
        n2 = def;
        }
        else {
            n2 = n2 * 80;
        }
    }
    else {
        def = conpar + 8;
        conpar = def;
    }
        num2 = telatxt.textContent + 8;
        telatxt.textContent = num2;
    }
}
function nine() {
    if(telatxt.textContent == 0) {
        num = 9;
        n1 = 9;
        telatxt.textContent = 9;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 9;
        num = telatxt.textContent + 9;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 9;
        n2 = def;
        }
        else {
            n2 = n2 * 90;
        }
    }
    else {
        def = conpar + 9;
        conpar = def;
    }
        num2 = telatxt.textContent + 9;
        telatxt.textContent = num2;
    }
}
function zro() {
    if(!inpar) {
    if(telatxt.textContent == 0) {
        num = 0;
        n1 = 0;
        telatxt.textContent = 0;
    }
    else if(op == 0) {
        n1 = telatxt.textContent + 0;
        num = telatxt.textContent + 0;
        telatxt.textContent = num;
    }
    else {
        if(!inpar) {
        if(n2 != 0.1) {
        def = n2 + 0;
        n2 = def;
        }
        else {
            n2 = 0;
        }
    }
        num2 = telatxt.textContent + 0;
        telatxt.textContent = num2;
    }
    }
    else {
        if(conpar.charAt(conpar.length - 1) == "(") {
            conpar += 0;
            num2 += 0;
            telatxt.textContent = num + simb + num2;
        }
        else if(conpar.charAt(conpar.length - 1) != 0) {
            conpar += 0;
            num2 += 0;
            telatxt.textContent = num2;
        }
    }
}
function adc() {
    if(telatxt.textContent == 0) {
        n1 = 0;
        n2 = 0.1;
        num = 0;
        op = "0" + "+";
    }
    if(!inpar) {
    if(res == "") {
        op = num + "+";
    }
    else {
        op = res + "+";
    }
    telatxt.textContent = op;
    simb = "+";
    }
    else if(conpar.charAt(conpar.length - 1) != "+" && conpar.charAt(conpar.length - 1) != "(") {
        if(conpar.charAt(conpar.length - 2) == "*" && conpar.charAt(conpar.length - 1) == "*") {
            conpar = conpar.slice(0, -2);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
        else if(conpar.charAt(conpar.length - 1) == "-" || conpar.charAt(conpar.length - 1) == "*" || conpar.charAt(conpar.length - 1) == "/") {
            conpar = conpar.slice(0, -1);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
        num2 += "+";
        conpar += "+";
        telatxt.textContent = num2;
    }
}
function sub() {
    if(telatxt.textContent == 0) {
        n1 = 0;
        n2 = 0.1;
        num = 0;
        op = "0" + "-";
    }
    if(!inpar) {
    if(res == "") {
        op = num + "-";
    }
    else {
        op = res + "-";
    }
    telatxt.textContent = op;
    simb = "-";
}
else if(conpar.charAt(conpar.length - 1) != "-" && conpar.charAt(conpar.length - 1) != "("){
        if(conpar.charAt(conpar.length - 2) == "*" && conpar.charAt(conpar.length - 1) == "*") {
            conpar = conpar.slice(0, -2);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
        else if(conpar.charAt(conpar.length - 1) == "+" || conpar.charAt(conpar.length - 1) == "*" || conpar.charAt(conpar.length - 1) == "/" || conpar.charAt(conpar.length - 2) == "**") {
            conpar = conpar.slice(0, -1);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
    num2 += "-";
    conpar += "-";
    telatxt.textContent = num2;
}
}
function mult() {
    if(telatxt.textContent == 0) {
        n1 = 0;
        n2 = 0.1;
        num = 0;
        op = "0" + "x";
    }
    if(!inpar) {
    if(res == "") {
        op = num + "x";
    }
    else {
        op = res + "x";
    }
    telatxt.textContent = op;
    simb = "x";
}
else if(conpar.charAt(conpar.length - 1) != "*" && conpar.charAt(conpar.length - 1) != "("){
        if(conpar.charAt(conpar.length - 2) == "*" && conpar.charAt(conpar.length - 1) == "*") {
            conpar = conpar.slice(0, -2);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
        else if(conpar.charAt(conpar.length - 1) == "-" || conpar.charAt(conpar.length - 1) == "+" || conpar.charAt(conpar.length - 1) == "/" || conpar.charAt(conpar.length - 2) == "**") {
            conpar = conpar.slice(0, -1);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
    num2 += "x";
    conpar += "*";
    telatxt.textContent = num2;
}
}
function div() {
    if(telatxt.textContent == 0) {
        n1 = 0;
        n2 = 0.1;
        num = 0;
        op = "0" + "÷";
    }
    if(!inpar) {
    if(res == "") {
        op = num + "÷";
    }
    else {
        op = res + "÷";
    }
    telatxt.textContent = op;
    simb = "÷";
}
else if(conpar.charAt(conpar.length - 1) != "/" && conpar.charAt(conpar.length - 1) != "(") {
        if(conpar.charAt(conpar.length - 2) == "*" && conpar.charAt(conpar.length - 1) == "*") {
            conpar = conpar.slice(0, -2);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
        else if(conpar.charAt(conpar.length - 1) == "-" || conpar.charAt(conpar.length - 1) == "*" || conpar.charAt(conpar.length - 1) == "+" || conpar.charAt(conpar.length - 2) == "**") {
            conpar = conpar.slice(0, -1);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
    num2 += "÷";
    conpar += "/";
    telatxt.textContent = num2;
}
}
function apg() {
    if(nparc != 0) {
        conpar = conpar.slice(0, -1);
    }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "(") {
        if(nparc == 1) {
            inpar = false;
        }
        npar--;
        nparc--;
        conpar = conpar.slice(0, -1);
    }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")") {
        inpar = true;
        par = false;
        npar++;
        nparc++;
        conpar = conpar.slice(0, -1);
    }
    if(telatxt.textContent.length >= 21 && telatxt.textContent == num) {
        n1 = Math.floor(n1 / 10);
        num = Math.floor(num / 10);
        res = Math.floor(res / 10);
        telatxt.textContent = num;
    }
    else if(telatxt.textContent != res) {
    if(telatxt.textContent.length > 1) {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
        num2 = num2.slice(0, -1);
        if(op == 0) {
        n1 = Math.floor(n1 / 10);
        num = Math.floor(num / 10);
        res = Math.floor(res / 10);
        }
        if (n2 != 0.1) {
            n2 = Math.floor(n2 / 10);
        }
    }
    else {
        clr();
        num = 0;
        n1 = 0;
        conpar = "";
    }
    }
}
function par1() {
    if(nparc != 0 && conpar.charAt(conpar.length - 1) != "(") {
        if(conpar.charAt(conpar.length - 1) != "+" && conpar.charAt(conpar.length - 1) != "-" && conpar.charAt(conpar.length - 1) != "*" && conpar.charAt(conpar.length - 1) != "/") {
            mult();
        }
    }
    if(nparc == 0 && inpar) {
        conta();
    }
    if(n2 != 0.1) {
        conta();
    }
    if(op == 0) {
        mult();
    }
    if(op == 0) {
    if(res == "") {
        op = num + "(";
    }
    else {
        op = res + "(";
    }
    }
    else {
        conpar += "(";
        num2 += "(";
    }
    if(res == 0) {
        num2 = num + simb + num2;
    }
    else {
        num2 = res + simb + num2;
    }
    if(nparc != 0) {
        telatxt.textContent = telatxt.textContent + "(";
    }
    else {
        telatxt.textContent = num2;
    }
    inpar = true;
    npar++;
    nparc++;
}
function par2() {
    if(nparc != 0) {
        if(conpar.charAt(conpar.length - 1) == "+" || conpar.charAt(conpar.length - 1) == "-" || conpar.charAt(conpar.length - 1) == "*" || conpar.charAt(conpar.length - 1) == "/") {
            zro();
        }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "(" && nparc > 1) {
        telatxt.textContent = num2;
    }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "(") {
        conpar += 0;
        num2 += 0;
        num2 += ")";
        if(nparc == 1) {
            telatxt.textContent = num2;
        }
        else if(conpar.charAt(conpar.length - 1) == 0) {
            telatxt.textContent = num2;
        }
        par = true;
        conpar += ")";
        nparc--;
    }
    else {
    num2 += ")";
    telatxt.textContent = num2;
    par = true;
    conpar += ")";
    nparc--;
    }
}
else {
    inpar = false;
}
}
function rq() {
    conta();
    if(telatxt.textContent == 0) {
        n1 = 0;
        n2 = 0.1;
        num = 0;
    }
    if(res == "") {
        op = "√" + num;
    }
    else {
        op = "√" + res;
    }
    telatxt.textContent = op;
    simb = "√";
    recap.textContent = telatxt.textContent;
    conta();
    if(n2 != 0) {
        telatxt.style.color = "#F5ED00";
        telatxt.style.textShadow = "0px 5px 5px #F49C00";
    }
    else {
        telatxt.style.color = "#ff0000";
        telatxt.style.textShadow = "0px 5px 5px #ff8000";
    }
}
function ptc() {
    if(telatxt.textContent == 0) {
        n1 = 0;
        n2 = 0.1;
        num = 0;
        op = "0" + "^";
    }
    if(!inpar) {
    if(res == "") {
        op = num + "^";
    }
    else {
        op = res + "^";
    }
    telatxt.textContent = op;
    simb = "^";
}
else if(conpar.charAt(conpar.length - 2) != "*" && conpar.charAt(conpar.length - 1) != "*" && conpar.charAt(conpar.length - 1) != "(") {
        if(conpar.charAt(conpar.length - 1) == "-" || conpar.charAt(conpar.length - 1) == "*" || conpar.charAt(conpar.length - 1) == "/" || conpar.charAt(conpar.length - 1) == "+") {
            conpar = conpar.slice(0, -1);
            num2 = num2.slice(0, -1);
            telatxt.textContent = num2;
        }
    num2 += "^";
    conpar += "**";
    telatxt.textContent = num2;
}
}
function equal() {
    conta();
    if(n2 != 0) {
        telatxt.style.color = "#F5ED00";
        telatxt.style.textShadow = "0px 5px 5px #F49C00";
    }
    else {
        telatxt.style.color = "#ff0000";
        telatxt.style.textShadow = "0px 5px 5px #ff8000";
    }
}

function positivo() {
    
}

function decimal() {
    if(nparc == 0) {
    if(!dcm) {
    if(res == 0) {
        num2 = num + simb + num2;
    }
    else {
        num2 = res + simb + num2;
    }
    }
    if(op == 0) {
        if(n1.toString().includes(".") == false) {
            n1 += ".";
            num2 += ".";
            telatxt.textContent = num2;
            dcm = true;
        }
    }
    else {
        if(n2.toString().includes(".") == false) {
            n2 += ".";
            num2 += ".";
            telatxt.textContent = num2;
            dcm = true;
        }
    }
}
else {
    conpar += ".";
}
}

function est() {
    if(telatxt.textContent.length > 12) {
        telatxt.style.fontSize = "5vh";
    }
    else {
        telatxt.style.fontSize = "6vh";
    }
    telatxt.style.color = "rgb(90, 248, 248)";
    telatxt.style.textShadow = "0px 5px 5px #1900ff";
    sons[0].currentTime = 0;
    sons[0].play();
}

function sett() {
    if(configs.style.animationName != "moverconfig") {
        configs.style.animationName = "moverconfig";
        ccls.style.animationName = "moverccls";
        ccls.style.display = "block";
        sha.style.display = "block";
        configimg.style.animationName = "moverconfigimg";
        sha.style.animationName = "shablock";
    }
    else {
        configs.style.animationName = "moverbackconfig";
        ccls.style.animationName = "moverbackccls";
        configimg.style.animationName = "moverbackconfigimg";
        sha.style.animationName = "shanone";
        setTimeout(() => {
            ccls.style.display = "none";
            sha.style.display = "none";
        }, 500)
    }
}

btns[0].addEventListener("click", one);

btns[1].addEventListener("click", two);

btns[2].addEventListener("click", three);

btns[3].addEventListener("click", four);

btns[4].addEventListener("click", five);

btns[5].addEventListener("click", six);

btns[6].addEventListener("click", seven);

btns[7].addEventListener("click", eight);

btns[8].addEventListener("click", nine);

btns[9].addEventListener("click", zro);

btns[10].addEventListener("click", adc);

btns[11].addEventListener("click", sub);

btns[12].addEventListener("click", mult);

btns[13].addEventListener("click", div);

btns[14].addEventListener("click", apg);

btns[15].addEventListener("click", clr);

btns[16].addEventListener("click", par1);

btns[17].addEventListener("click", par2);

btns[18].addEventListener("click", rq);

btns[19].addEventListener("click", ptc);

btns[20].addEventListener("click", equal);

btns[21].addEventListener("click", positivo);

btns[22].addEventListener("click", decimal);

configs.addEventListener("click", sett);

function tcl(event) {
    const keyPressed = event.keyCode;
    const no1 = 97;
    const no2 = 98;
    const no3 = 99;
    const no4 = 100;
    const no5 = 101;
    const no6 = 102;
    const no7 = 103;
    const no8 = 104;
    const no9 = 105;
    const no0 = 96;
    const tca = 107;
    const tcs = 109;
    const tcm = 106;
    const tcd = 111;
    const tcapg = 8;
    const tcCE = 46;
    const tcabr = 57;
    const tcfch = 48;
    const tcraiz = 82;
    const tcpow = 222;
    const tceql = 187;
    switch (keyPressed) {
        case (no1):
            if(telatxt.textContent == res) {
                clr();
            }
            one();
            est();
        break;
        case (no2):
            if(telatxt.textContent == res) {
                clr();
            }
            two();
            est();
        break;
        case (no3):
            if(telatxt.textContent == res) {
                clr();
            }
            three();
            est();
        break;
        case (no4):
            if(telatxt.textContent == res) {
                clr();
            }
            four();
            est();
        break;
        case (no5):
            if(telatxt.textContent == res) {
                clr();
            }
            five();
            est();
        break;
        case (no6):
            if(telatxt.textContent == res) {
                clr();
            }
            six();
            est();
        break;
        case (no7):
            if(telatxt.textContent == res) {
                clr();
            }
            seven();
            est();
        break;
        case (no8):
            if(telatxt.textContent == res) {
                clr();
            }
            eight();
            est();
        break;
        case (no9):
            if(telatxt.textContent == res) {
                clr();
            }
            nine();
            est();
        break;
        case (no0):
            if(telatxt.textContent == res) {
                clr();
            }
            zro();
            est();
        break;
        case (tca):
            adc();
            est();
        break;
        case (tcs):
            sub();
            est();
        break;
        case (tcm):
            mult();
            est();
        break;
        case (tcd):
            div();
            est();
        break;
        case (tcapg):
            apg();
            est();
        break;
        case (tcCE):
            clr();
            est();
        break;
        case (tcabr):
            par1();
            est();
        break;
        case (tcfch):
            par2();
            est();
        break;
        case (tcraiz):
            rq();
            telatxt.style.color = "#F5ED00";
            telatxt.style.textShadow = "0px 5px 5px #F49C00";
            sons[0].currentTime = 0;
            sons[0].play();
            if(telatxt.textContent.length > 12) {
                telatxt.style.fontSize = "40px";
            }
            else {
                telatxt.style.fontSize = "60px";
            }
        break;
        case (tcpow):
            ptc();
            est();
        break;
        case (tceql):
            equal();
            sons[0].currentTime = 0;
            sons[0].play();
        break;
    }
}