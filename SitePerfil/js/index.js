function validaForms(){
    let nome= document.querySelector("input#nome").value;
    let email = document.querySelector("input#email").value;
    let assunto= document.querySelector('textarea#assunto').value;
    console.log("nome: "+nome);
    console.log("email: "+email);
    console.log("assunto: "+assunto);

}

function validaNome(){
    let nome= document.querySelector("input#nome");
    if(nome.value.length <= 2){
        nome.style.backgroundColor= '#ffbfaa';
    }else{
        nome.style.backgroundColor= '#F0FFF0';
    }
}