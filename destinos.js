let nome = document.getElementById("nome");
let email = document.querySelector("#email");
// #email porque se trata de um id
// se fosse classe eu colocava .email
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let assuntoOk = false;
let emailOk = false;
let mapa = document.querySelector("#mapa");
function validaNome(){
    let txt = document.querySelector("#txtNome");
    if(nome.value.length < 3){
        txt.innerHTML= 'Nome inválido'
        txt.style.color='red'
    }
    else{
        txt.innerHTML= 'Nome válido'
        txt.style.color='green'
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf('@')== -1  || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color='red'
    }
    else{
        txtEmail.innerHTML='Email válido';
        txtEmail.style.color='green';
        emailOk = true;
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length > 200){
        txtAssunto.innerHTML='Tamanho de assunto inválido'
        txtAssunto.style.color='red'
    }
    else{
        txtAssunto.innerHTML= 'Assunto válido'
        txtAssunto.style.color='green'
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("FORMULARIO ENVIADO")
    }
    else{
        alert("PREENCHA CORRETAMENTE")
    }
}
