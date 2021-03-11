var nomeIsOk= false;
var emailIsOk= false;
var assuntoIsOk= false;

function validaForms(){
    if(nomeIsOk && emailIsOk && assuntoIsOk) alert("Formulário enviado com sucesso");
    else alert("Formulãrio não enviado, por favor verifique os campos!");

}

function validaNome(){
    let nome= document.querySelector("input#nome");
    let verificaNome= document.querySelector("#verificaNome");
    if(nome.value.length <= 2){
        nome.style.backgroundColor= '#ffbfaa';
        verificaNome.style.backgroundColor= '#ffbfaa';
        verificaNome.innerHTML = "Nome Inválido"
    }else{
        nome.style.backgroundColor= '#F0FFF0';
        verificaNome.style.backgroundColor= '#F0FFF0';
        verificaNome.innerHTML = "Nome Válido"
        nomeIsOk= true;
    }
}

function validaEmail(){
    let email= document.querySelector("input#email");
    let verificaEmail= document.querySelector("#verificaEmail");
    if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
        email.style.backgroundColor= '#ffbfaa';
        verificaEmail.innerHTML = "Email Inválido"
    }else{
        email.style.backgroundColor= '#F0FFF0';
        verificaEmail.innerHTML = "Email Válido"
        emailIsOk= true;
    }   
}


function validaAssunto(){
    let assunto= document.querySelector("textarea#assunto");
    let verificaAssunto= document.querySelector("#verificaAssunto");
    if(assunto.value.length > 100){
        assunto.style.backgroundColor= '#ffbfaa';
        verificaAssunto.innerHTML = "Assunto muito grande";
    }else{
        assunto.style.backgroundColor= '#F0FFF0';
        verificaAssunto.innerHTML = "Assunto de tamanho adequado";
        assuntoIsOk= true;
    }   
}