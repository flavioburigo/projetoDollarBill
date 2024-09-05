//Função buscar/pesquisar: obtém a seção HTML onde os resultados serão exibidos//
function buscarAtivo() {
    const busca = document.getElementById('busca').value.toLowerCase();
    const resultadoDiv = document.getElementById('item-resultado');
    
    /*Inicializa uma string vazia para armazenar os resultados*/
    resultadoDiv.innerHTML = '';
    
    /*Verifica se a variável ativoEncontrado contém dados sobre a busca*/
    const ativoEncontrado = ativoMoeda.find(ativo => ativo.titulo.toLowerCase().includes(busca));

    /*Se sim (if) preenche a div com os detalhes da busca (item-resultado)*/
    if (ativoEncontrado) {
        resultadoDiv.innerHTML = `
        <div class="item-resultado">
              <h2>${ativoEncontrado.titulo}</h2>
              <p>${ativoEncontrado.descricao}</p>
              <a href="${ativoEncontrado.link}" target="_blank">Mais informações</a>
        </div>
    `;
    /*Se não (else) exibe uma mensagem informando que o ativo não foi encontrado*/
    } else {
      resultadoDiv.textContent = 'Ativo não encontrado.';
    }
}