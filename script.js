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
const cls = document.querySelector("#cls");
const cvr = document.querySelector("#cvr");
const otr = document.querySelector("#otr");
const esq = document.querySelector("#esq");
const dir = document.querySelector("#dir");
const btnspl = document.querySelector("#btnspl");
const btnctf = document.querySelector("#btnctf");
const btntres = document.querySelector("#btntres");
const btnprm = document.querySelector("#btnprm");
const btnseg = document.querySelector("#btnseg");
const cals = document.querySelector(".cals");
const conv = document.querySelector(".conv");
const outros = document.querySelector(".outros");
const settings = document.querySelector("#settings");
const allcg = document.querySelector("#allcg");
const options = document.querySelector(".options");

let simb;
let res = 0;
let inpar = false;
let par = false;
let npar = 0;
let nparc = 0;

const btns = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, zero, mais, menos, vezes, divisao, clear, CE, abre, fecha, raiz, elevado, igual, negativo, virgula];

const som1 = new Audio('click.mp3');

const sons = [som1];

for (let i = 0; i < 10; i++) {
    btns[i].addEventListener("click", () => {
        if (nparc != 0 && telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")") {
            mult();
        }
        if(telatxt.textContent == res) {
            clr();
        }
    })
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        if(telatxt.textContent == "Math Error") {
            telatxt.textContent = 0;
        }
        if(telatxt.textContent.length > 12) {
            telatxt.style.fontSize = "4vh";
        }
        else {
            telatxt.style.fontSize = "6vh";
        }
        telatxt.style.color = "rgb(90, 248, 248)";
        telatxt.style.textShadow = "0px 5px 5px #1900ff";
        sons[0].currentTime = 0;
        sons[0].play();
    })
}

for (let i = 10; i <= 13; i++) {
    btns[i].addEventListener("click", () => {
        if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")" && nparc == 0) {
            conta();
        }
    })
}

btns[19].addEventListener("click", () => {
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")" && nparc == 0) {
        conta();
    }
})

window.addEventListener("keydown", tcl);

function conta() {
    if(telatxt.textContent != res) {
    if(npar != 0) {
        for(npar; npar > 0; npar--) {
            par2();
        }
    }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "^") {
        telatxt.textContent += 0;
    }
        if(simb == "√") {
            recap.textContent = "√" + telatxt.textContent; 
        }
        else {
            recap.textContent = telatxt.textContent;
        }
        telatxt.textContent = telatxt.textContent.replace(/x/g, "*");
        telatxt.textContent = telatxt.textContent.replace(/÷/g, "/");
        telatxt.textContent = telatxt.textContent.replaceAll("^", "**");
        res = eval(telatxt.textContent);
        if(simb == "√") {
            res = Math.sqrt(res);
            simb = "";
        }
        if(res != "Infinity") {
            telatxt.textContent = res;
        }
        else {
            telatxt.style.color = "#ff0000";
            telatxt.style.textShadow = "0px 5px 5px #ff8000";
            telatxt.textContent = "Math Error";
        }
    if(telatxt.textContent.length > 12) {
        telatxt.style.fontSize = "3.5vh";
    }
    inpar = false;
    par = false;
    npar = 0;
}
}

function clr() {
    telatxt.textContent = "0";
    recap.textContent = "";
    simb = "";
    res = 0;
    inpar = false;
    par = false;
    npar = 0;
    nparc = 0;
    telatxt.style.fontSize = "6vh";
    telatxt.style.color = "rgb(90, 248, 248)";
    telatxt.style.textShadow = "0px 5px 5px #1900ff";
}

function one() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 1;
    }
    else {
        telatxt.textContent += 1;
    }
}
function two() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 2;
    }
    else {
        telatxt.textContent += 2;
    }
}
function three() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 3;
    }
    else {
        telatxt.textContent += 3;
    }
}
function four() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 4;
    }
    else {
        telatxt.textContent += 4;
    }
}
function five() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 5;
    }
    else {
        telatxt.textContent += 5;
    }
}
function six() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 6;
    }
    else {
        telatxt.textContent += 6;
    }
}
function seven() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 7;
    }
    else {
        telatxt.textContent += 7;
    }
}
function eight() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 8;
    }
    else {
        telatxt.textContent += 8;
    }
}
function nine() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 9;
    }
    else {
        telatxt.textContent += 9;
    }
}
function zro() {
    if(!inpar) {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 0;
    }
    else {
        telatxt.textContent += 0;
    }
    }
    else {
        if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "(") {
            telatxt.textContent += 0;
        }
        else if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != 0) {
            telatxt.textContent += 0;
        }
    }
}
function adc() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 0;
    }
    if(!inpar && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != ".") {
        telatxt.textContent += "+";
        simb = "+";
    }
    else if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "(") {
        if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "^" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ".") {
            telatxt.textContent = telatxt.textContent.slice(0, -1);
        }
        telatxt.textContent += "+";
    }
}
function sub() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 0;
    }
    if(!inpar && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != ".") {
        telatxt.textContent += "-";
        simb = "-";
    }
else if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "("){
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "^" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ".") {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
    }
    telatxt.textContent += "-";
}
}
function mult() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 0;
    }
    if(!inpar && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != ".") {
        telatxt.textContent += "x";
        simb = "x";
    }
else if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "("){
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "^" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ".") {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
    }
    telatxt.textContent += "x";
}
}
function div() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 0;
    }
    if(!inpar && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != ".") {
        telatxt.textContent += "÷";
        simb = "÷";
    }
else if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "(") {
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "^" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ".") {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
    }
    telatxt.textContent += "÷";
}
}
function apg() {
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "(") {
        if(nparc == 1) {
            inpar = false;
        }
        npar--;
        nparc--;
    }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == ")") {
        inpar = true;
        par = false;
        npar++;
        nparc++;
    }
    if(telatxt.textContent.length >= 21) {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
    }
    else if(telatxt.textContent != res) {
    if(telatxt.textContent.length > 1) {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
    }
    else {
        clr();
    }
    }
}
function par1() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = "(";
    }
    else {
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "(") {
        if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷") {
            mult();
        }
    }
    if(nparc == 0 && inpar) {
        conta();
    }
    telatxt.textContent += "(";
}
    inpar = true;
    npar++;
    nparc++;
}
function par2() {
    if(nparc != 0) {
        if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷") {
            telatxt.textContent += telatxt.textContent.charAt(telatxt.textContent.length - 2);
        }
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "(") {
        telatxt.textContent += 0;
        telatxt.textContent += ")";
        par = true;
        nparc--;
    }
    else {
    telatxt.textContent += ")";
    par = true;
    nparc--;
    }
}
else {
    inpar = false;
}
}
function rq() {
    simb = "√";
    equal();
}
function ptc() {
    if(telatxt.textContent == 0) {
        telatxt.textContent = 0;
    }
    if(!inpar && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "+" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "-" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "÷" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "x" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != ".") {
    telatxt.textContent += "^";
    simb = "^";
}
else if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != "^" && telatxt.textContent.charAt(telatxt.textContent.length - 1) != "(") {
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == ".") {
        telatxt.textContent = telatxt.textContent.slice(0, -1);
    }
    telatxt.textContent += "^";
}
}
function equal() {
    telatxt.style.color = "#F5ED00";
    telatxt.style.textShadow = "0px 5px 5px #F49C00";
    conta();
}

function positivo() {
    
}

function decimal() {
    if(telatxt.textContent.charAt(telatxt.textContent.length - 1) != ".") {
        if(telatxt.textContent.charAt(telatxt.textContent.length - 1) == "+" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "-" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "x" || telatxt.textContent.charAt(telatxt.textContent.length - 1) == "÷") {
            zro();
        }
            telatxt.textContent += ".";
    }
}

function est() {
    if(telatxt.textContent.length > 12) {
        telatxt.style.fontSize = "3.5vh";
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
    if(options.style.animationName != "moverccls") {
        options.style.animationName = "moverccls";
        options.style.display = "flex";
        sha.style.display = "block";
        configimg.style.animationName = "moverconfigimg";
        sha.style.animationName = "shablock";
    }
    else {
        options.style.animationName = "moverbackccls";
        configimg.style.animationName = "moverbackconfigimg";
        sha.style.animationName = "shanone";
        allcg.style.opacity = "0";
        allcg.style.display = "none";
        options.style.width = "0%";
        setTimeout(() => {
            options.style.display = "none";
            sha.style.display = "none";
        }, 300)
    }
}

function direita() {
    if(cls.style.left == "") {
    cls.style.left = "-15vh";
    cls.style.color = "#ffffff52";
    cls.style.borderColor = "#ffffff52";
    cvr.style.left = "-15vh";
    cvr.style.color = "#ffffff";
    cvr.style.borderColor = "#ffffff";
    otr.style.left = "-15vh";
    cals.style.display = "none";
    conv.style.display = "flex";
    }
    else if(cls.style.left == "-15vh") {
        cls.style.left = "-30vh";
        cvr.style.left = "-30vh";
        cvr.style.color = "#ffffff52";
        cvr.style.borderColor = "#ffffff52";
        otr.style.left = "-30vh";
        otr.style.color = "#ffffff";
        otr.style.borderColor = "#ffffff";
        conv.style.display = "none";
        outros.style.display = "flex";
    }
}
function esquerda() {
    if(cls.style.left == "-15vh") {
    cls.style.left = "";
    cls.style.color = "#ffffff";
    cls.style.borderColor = "#ffffff";
    cvr.style.left = "";
    cvr.style.color = "#ffffff52";
    cvr.style.borderColor = "#ffffff52";
    otr.style.left = "";
    cals.style.display = "flex";
    conv.style.display = "none";
    }
    else if(cls.style.left == "-30vh") {
        cls.style.left = "-15vh";
        cvr.style.left = "-15vh";
        cvr.style.color = "#ffffff";
        cvr.style.borderColor = "#ffffff";
        otr.style.left = "-15vh";
        otr.style.color = "#ffffff52";
        otr.style.borderColor = "#ffffff52";
        outros.style.display = "none";
        conv.style.display = "flex";
    }
}

function cg() {
    if(allcg.style.opacity != "1") {
        options.style.width = "100%";
        allcg.style.display = "flex";
        allcg.style.opacity = "1";
    }
    else {
        options.style.width = "0%";
        allcg.style.opacity = "0";
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

dir.addEventListener("click", direita);

esq.addEventListener("click", esquerda);

settings.addEventListener("click", cg);

sha.addEventListener("click", () => {
    if(ccls.style.animationName != "moverbackccls") {
        sett();
    }
})

cls.addEventListener("click", () => {
    if(cls.style.left == "-15vh") {
        esquerda();
    }
});

cvr.addEventListener("click", () => {
    if(cls.style.left == "") {
        direita();
    }
    else {
        esquerda()
    }
});

otr.addEventListener("click", () => {
    if(cls.style.left == "-15vh") {
        direita();
    }
});

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
    const esc = 27;
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
                telatxt.style.fontSize = "4vh";
            }
            else {
                telatxt.style.fontSize = "6vh";
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
        case (esc):
            sett();
        break;
    }
}