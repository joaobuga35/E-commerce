// Selecionando o local para onde os produtos vão.
let listaProdutos = document.querySelector('.lista-produtos')

//variavel contador
let count = 0

// variavel soma
let soma = 0
//Função criada para adicionar os produtos, recebendo dois parametros, objeto e local para onde vão

function addCardsProdutos(lista, localParaAdicionar){
    for (let i = 0; i < lista.length; i++) {
        // Criando e alimentando os atributos da lista
        let liProdutos = document.createElement('li')
        let imgProdutos = document.createElement('img')
        let tipoProdutos = document.createElement('p')
        let h2Produtos  = document.createElement('h2')
        let descricaoProduto = document.createElement('p')
        let spanProdutos = document.createElement('span')
        let buttonProdutos = document.createElement('button')

        liProdutos.classList.add('card-produtos')
        tipoProdutos.classList.add('tipo-produto')
        descricaoProduto.classList.add('descricao-produto')
        buttonProdutos.classList.add('btn-adicionar')
        buttonProdutos.id = `produto_${lista[i].id}`

        imgProdutos.src = lista[i].img 
        imgProdutos.alt = lista[i].nameItem
        tipoProdutos.innerText = lista[i].tag
        h2Produtos.innerText = lista[i].nameItem
        descricaoProduto.innerText = lista[i].description
        spanProdutos.innerText = `R$ ${lista[i].value}`
        buttonProdutos.innerText = lista[i].addCart
        
        //Criando o evento do botão para adicionar no carrinho de compras.
        buttonProdutos.addEventListener('click', function(event){
            let elementoClicado = event.target
            let idElementoClicado = elementoClicado.id
            let id = parseInt(idElementoClicado.substring(8))
        
            for (let j = 0; j < lista.length; j++) {
                if (lista[j].id === id) {
                    // Criando elementos do carrinho
                    criarCarrinhoDeCompras(lista[j])
                    count++
                    document.querySelector('.quantidade-produtos').innerHTML = count

                    soma = lista[j].value + soma
                    document.querySelector('.valor-total').innerHTML = `R$ ${soma}`
                }
            }
            verificarCarrinho()
        })

        //Alimentando as tags com os seus filhos.
        liProdutos.append(imgProdutos,tipoProdutos,h2Produtos,descricaoProduto,spanProdutos,buttonProdutos)

        localParaAdicionar.appendChild(liProdutos)
    }
    return localParaAdicionar
}

addCardsProdutos(data,listaProdutos)

function criarCarrinhoDeCompras(identificador){
    // Criando elementos do carrinho
    let listaCarrinho = document.querySelector('.lista-carrinho')
    let liCarrinho = document.createElement('li')
    let imgCarrinho = document.createElement('img')
    let divCarrinho = document.createElement('div')
    let h3Carrinho = document.createElement('h3')
    let spanCarrinho = document.createElement('span')
    let buttonCarrinho = document.createElement('button')

    liCarrinho.classList.add('item-carrinho')
    divCarrinho.classList.add('informacoes')
    buttonCarrinho.classList.add('btn-remover')

    buttonCarrinho.addEventListener('click', function(event){
        let li = event.path[2];
        li.remove();
        count--
        document.querySelector('.quantidade-produtos').innerHTML = count

        soma = soma - identificador.value
        document.querySelector('.valor-total').innerHTML = `R$ ${soma}`

        verificarCarrinho()
    })

    imgCarrinho.src = identificador.img 
    imgCarrinho.alt = identificador.nameItem
    h3Carrinho.innerText = identificador.nameItem
    spanCarrinho.innerText = `R$ ${identificador.value}`
    buttonCarrinho.innerText = 'Remover produto'

    divCarrinho.append(h3Carrinho,spanCarrinho,buttonCarrinho)
    liCarrinho.append(imgCarrinho,divCarrinho)

    listaCarrinho.appendChild(liCarrinho)
}

function verificarCarrinho(){
    let ulCarrinho = document.querySelector('.lista-carrinho')
    let divCarrinhoVazio = document.querySelector('.carrinho-vazio')
 
    if (ulCarrinho.children.length === 0) {
        divCarrinhoVazio.classList.remove('esconder')

    } else {
        divCarrinhoVazio.classList.add('esconder')
    }

    verificaCompras()
}

function verificaCompras(){
    let ulCarrinho = document.querySelector('.lista-carrinho')
    let divFinal = document.querySelector('.secao-final')
    
    if (ulCarrinho.children.length === 0) {
        divFinal.classList.add('esconder')
    } else {
        divFinal.classList.remove('esconder')
    }
}
verificaCompras()







// Modelos para o DOM
/*<li class="item-carrinho">
    <img src="../img/sapatosOn/cintoLv.jpg" alt="">
        <div class="informacoes">
            <h3>Cinto Louis Vuitton</h3>
                <span>R$ 5000,00</span>
                    <button class="btn-remover">Remover produto</button>
                    </div>
</li>

<ul class="lista-produtos">
     <li class="card-produtos">
        <img src="../img/sapatosOn/cintoLv.jpg" alt="Cinto Louis Vuitton">
            <p class="tipo-produto">Acessórios</p>
            <h2>Cinto Louis Vuitton</h2>
            <p class="descricao-produto">Adicione estilo com o nosso cinto de grife LV.</p>
            <span>R$ 5000,00</span>
            <button class="btn-adicionar">Adicionar ao carrinho</button>
    </li>
*/