var nomeGlobal;
var msgGlobal

function conferirMensagem(){
    var nome = document.getElementById("nome").value;
    var msg = document.getElementById("mensagem").value;

    nomeGlobal = nome;
    msgGlobal = msg;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = msg;
}

function enviar(){
    var numeroTel = "554198799999";
    var linkWhatsApp = "https://wa.me/" + numeroTel + "?text=Nome: " + nomeGlobal + " - " + msgGlobal;


    window.open(linkWhatsApp, "_blank");
}