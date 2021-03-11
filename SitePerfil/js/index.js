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
    let verificaNome= document.querySelector("#verificaNome");
    if(nome.value.length <= 2){
        nome.style.backgroundColor= '#ffbfaa';
        verificaNome.style.backgroundColor= '#ffbfaa';
        verificaNome.innerHTML = "Nome Inválido"
    }else{
        nome.style.backgroundColor= '#F0FFF0';
        verificaNome.style.backgroundColor= '#F0FFF0';
        verificaNome.innerHTML = "Nome Válido"
    }
}