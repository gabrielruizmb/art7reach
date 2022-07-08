
function validacaoproduto(idnome, idpreco, idquantidade, idescricao){
const nome = document.getElementById(idnome).value;
const preco = document.getElementById(idpreco).value;
const quantidade = document.getElementById(idquantidade).value;
const descricao = document.getElementById(idescricao).value;

    if(nome == "")
        alert("Digite o nome do produto. E necessario para realizar o cadastro");
    else if(preco == "")
        alert("Digite o preco do produto e necessario para realizar o cadastro");
    else if(quantidade == "")
        alert("Digite a quantidade do produto e necessario para realizar o cadastro");
    //else if(descricao == "")
        //alert("Digite a descricao do produto e necessario para realizar o cadastro");
    else cadastrandoProduto(nome, preco, quantidade, descricao);
}

function cadastrandoProduto(produto, valor, unidade, desc){
    const Produtosnovos = {nome:produto, preco:valor, quantidade:unidade, descricao:desc};

    if(typeof(Storage) !== "undefined"){ //verifica de o navegadore e compativel com localStorage
        let produtos = localStorage.getItem("produtos");
        if(produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(Produtosnovos);//add novos produtos 
        localStorage.setItem("produtos", JSON.stringify(produtos))
        alert(`O produto foi cadastrado com sucesso!`);
    }
}


function validacaoservico(idNomeservico, idDesc_servico){
    const nomeservico = document.getElementById(idNomeservico).value;
    const descricaoservico = document.getElementById(idDesc_servico).value;

    if(nomeservico == "")
        alert("Digite o nome do serviço");
    else cadastrarServico(nomeservico, descricaoservico);
}

function cadastrarServico(nomeS, DescricaoS){
    const Servicosnovos = {nome:nomeS, Descriçao:DescricaoS};

    if(typeof(Storage) !== "undefined"){
        let servicos = localStorage.getItem("servicos");
        if(servicos == null) servicos = [];
        else servicos = JSON.parse(servicos);
        servicos.push(Servicosnovos);
        localStorage.setItem("servicos", JSON.stringify(servicos))
        alert(`Um novo serviço foi cadastrado com sucesso!`);
    }
}

function Listaestoque(){
    if(typeof(Storage) !== "undefined"){
        let produtos = localStorage.getItem("produtos");
        if(produtos == null)
            alert("Ainda nao há cadastro de produtos");
        else{
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
               document.write(`Produto:${produto.nome} &nbsp &nbsp &nbsp &nbsp R$${produto.preco}  &nbsp &nbsp &nbsp &nbsp Unidades:${produto.quantidade}  
               &nbsp &nbsp &nbsp &nbsp Descricao:${produto.descricao} <br/>`);

            });
        }
    }
}
