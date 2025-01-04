function carregarSolicitacoes() {
    const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];
    const lista = document.getElementById('lista-solicitacoes');
    lista.innerHTML = '';
    solicitacoes.forEach((solicitacao, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${solicitacao.titulo}</td>
        <td>${solicitacao.descricao.slice(0, 30)}...</td>
        <td>${solicitacao.rede || 'N/A'}</td>
        <td>${solicitacao.status}</td>
        <td class="actions">
          <button class="view" onclick="visualizarSolicitacao(${index})">Visualizar</button>
          <button class="edit" onclick="editarSolicitacao(${index})">Editar</button>
          <button class="delete" onclick="excluirSolicitacao(${index})">Excluir</button>
        </td>
      `;
      lista.appendChild(row);
    });
  }
  
  function visualizarSolicitacao(index) {
    const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];
    const solicitacao = solicitacoes[index];
    document.getElementById('modal-titulo').innerText = solicitacao.titulo;
    document.getElementById('modal-descricao').innerText = solicitacao.descricao;
    document.getElementById('modal-rede').innerText = solicitacao.rede || 'N/A';
    document.getElementById('modal-status').innerText = solicitacao.status;
    document.getElementById('modal').style.display = 'flex';
  }
  
  function fecharModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  function pesquisarSolicitacoes() {
    const pesquisa = document.getElementById('pesquisa').value.trim().toLowerCase();
    const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];
    const lista = document.getElementById('lista-solicitacoes');
    lista.innerHTML = '';
    solicitacoes
      .filter(solicitacao => solicitacao.titulo.toLowerCase().includes(pesquisa))
      .forEach((solicitacao, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${solicitacao.titulo}</td>
          <td>${solicitacao.descricao.slice(0, 30)}...</td>
          <td>${solicitacao.rede || 'N/A'}</td>
          <td>${solicitacao.status}</td>
          <td class="actions">
            <button class="view" onclick="visualizarSolicitacao(${index})">Visualizar</button>
            <button class="edit" onclick="editarSolicitacao(${index})">Editar</button>
            <button class="delete" onclick="excluirSolicitacao(${index})">Excluir</button>
          </td>
        `;
        lista.appendChild(row);
      });
  }
  
  function editarSolicitacao(index) {
    alert(`Função de edição para a solicitação ${index + 1} em desenvolvimento.`);
  }
  
  function excluirSolicitacao(index) {
    const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];
    solicitacoes.splice(index, 1);
    localStorage.setItem('solicitacoes', JSON.stringify(solicitacoes));
    carregarSolicitacoes();
  }
  
  // Carrega as solicitações ao iniciar a página
  document.addEventListener('DOMContentLoaded', carregarSolicitacoes);