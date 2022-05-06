
const textin = document.getElementById("textin");
const textout = document.getElementById("textout");
const encodeBtn = document.getElementById("encrypt");
const decodeBtn = document.getElementById("decrypt");
const copyBtn = document.getElementById("copyBtn");


encodeBtn.addEventListener('click', function () {
    validation(textin);
    textout.value = encode(textin.value);
});

decodeBtn.addEventListener('click', function (){
    validation(textin);
    const txtencriptado = decode(textin.value);
    textout.value = txtencriptado;
});

copyBtn.addEventListener('click', copy);


function copy() {
    let copyText = textout;
    copyText.select();
    document.execCommand("copy");
    
    copyBtn.textContent = "Copiado";
    setTimeout(function(){
        copyBtn.textContent = "Copiar";
    },600);
}

const keys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
};

function encode(string) {
    const characters = string.split('');
    return characters.map(function (character) {
        return keys[character] || character;
    }).join('');

  
}

function decode(string) {
    let value = string;
    for (const key of Object.keys(keys)) {
        value = value.replaceAll(keys[key], key);
    }return value;
}

function validation(inputtxt) {
    var letters = /^[ a-z ]+$/;
    const sidebarimg = document.getElementById("sidebar1");
    const sidebar2 = document.getElementById("sidebar2");
    const txtalert = document.getElementById("alertaText");
    const alertimg2 = document.getElementById("alert2");

    if(inputtxt.value.match(letters)){
        sidebarimg.style.display = "none";
        sidebar2.style.display = "block";
        txtalert.style.color= "#495057";
        txtalert.style.fontSize= "10px";
        return true;
    }
    else{
        txtalert.style.color = "red";
        txtalert.style.fontSize = "19px";
        sidebarimg.style.display = "block";
        sidebar2.style.display = "none";
        alertimg2.style.display = "block";
        return false;
    }
}


