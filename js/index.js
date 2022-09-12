let listaProdutos = document.querySelector('.lista-produtos')


function addCardsProdutos(lista, localParaAdicionar){
    for (let i = 0; i < lista.length; i++) {
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

        imgProdutos.src = lista[i].img 
        imgProdutos.alt = lista[i].nameItem
        tipoProdutos.innerText = lista[i].tag
        h2Produtos.innerText = lista[i].nameItem
        descricaoProduto.innerText = lista[i].description
        spanProdutos.innerText = `R$ ${lista[i].value},00`
        buttonProdutos.innerText = lista[i].addCart
        
        liProdutos.append(imgProdutos,tipoProdutos,h2Produtos,descricaoProduto,spanProdutos,buttonProdutos)

        localParaAdicionar.appendChild(liProdutos)
    }
    return localParaAdicionar
}

addCardsProdutos(data,listaProdutos)

    /* <ul class="lista-produtos">
                <li class="card-produtos">
                    <img src="../img/sapatosOn/cintoLv.jpg" alt="Cinto Louis Vuitton">
                    <p class="tipo-produto">Acessórios</p>
                    <h2>Cinto Louis Vuitton</h2>
                    <p class="descricao-produto">Adicione estilo com o nosso cinto de grife LV.</p>
                    <span>R$ 5000,00</span>
                    <button class="btn-adicionar">Adicionar ao carrinho</button>
                </li>
        </li>*/