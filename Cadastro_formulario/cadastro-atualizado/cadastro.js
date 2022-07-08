const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const Confirmar_senha = document.getElementById('Confirmar_senha');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    verificacao();
});

function verificacao(){
    const usuariovalor = usuario.value;
    const emailvalor = email.value;
    const senhavalor = senha.value;
    const Confirmar_senhavalor = Confirmar_senha.value;

    if(usuariovalor === ""){
        setErrorFor(usuario, "Nome de usuário obrigatório.");
    } else {
        setSuccessFor(usuario);
    }

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

    if(Confirmar_senhavalor === ""){
        setErrorFor(Confirmar_senha, "Confirmaçao de senha obrigatória.");
    } else if(Confirmar_senhavalor !== senhavalor){
        setErrorFor(Confirmar_senha, "As sennhas nao sao iguais");
    } else {
        setSuccessFor(Confirmar_senha);
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