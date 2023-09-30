let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI() {  //usar assincrona para ela esperar uma promessa 
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  exibirLivros(livrosComDesconto)
}



