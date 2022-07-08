const form = document.getElementById('form');
const email = document.getElementById('Email');
const senha = document.getElementById('Senha');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    verificacao();
});

function verificacao(){
    const emailvalor = email.value;
    const senhavalor = senha.value;

    if(emailvalor === ""){
        setErrorFor(email, "Email é obrigatório.");
    } else if(!verificacaoEmail(emailvalor)){
        setErrorFor(email, "Insira um email válido.");
    } else{
        setSuccessFor(email);
    }

    if(senhavalor === ""){
        setErrorFor(senha, "Senha é obrigatória.");
    } else if(senhavalor.length < 7){
        setErrorFor(senha, "A senha precisa ter no minimo 8 caracteres.");
    } else {
        setSuccessFor(senha);
    }

    const formcartaoarea = form.querySelectorAll(".cartao_area");

    const formvalidacao = [...formcartaoarea].every((formcartaoArea) => {
        return formcartaoArea.className === "cartao_area success";
    });

    if(formvalidacao){
        console.log("O formulário está validado");
    }
}

function verificacaoEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function setErrorFor(input, menssagem){
    const formcartaoarea = input.parentElement;
    const small = formcartaoarea.querySelector("small");
    
    small.innerText = menssagem;
    
    formcartaoarea.className = "cartao_area error" ;
}

function setSuccessFor(input){
    const formcartaoarea = input.parentElement;
    
    formcartaoarea.className = "cartao_area success"; 
}