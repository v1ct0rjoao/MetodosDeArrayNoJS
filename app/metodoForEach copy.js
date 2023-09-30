const elementoParaInserirLivros = document.getElementById('livros')
//ForEach (elemento, e o que ele deve fazer)
// livros.forEach(livro => {
//   console.log(livro)
// })

function exibirLivros(listaDelivros){
    elementoParaInserirLivros.innerHTML = " "
    listaDelivros.forEach(livro => {
      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
      
    })
  }
  