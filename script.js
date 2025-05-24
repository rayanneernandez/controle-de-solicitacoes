// Captura o formulário
const form = document.getElementById('form-solicitacao');

// Captura o modal e seus elementos
const modal = document.getElementById('modal-sucesso');
const btnOk = document.getElementById('btn-ok');
const fecharModal = document.getElementById('fechar-modal');

// Garante que o modal esteja oculto inicialmente
modal.style.display = 'none';

// Evento de submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os valores dos campos
    const titulo = document.getElementById('titulo').value.trim();
    const rede = document.getElementById('rede').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const relevancia = document.getElementById('relevancia').value;
    const prazo = document.getElementById('prazo').value || null; // Campo de data (opcional)

    // Validação simples (opcional)
    if (!titulo || !rede || !descricao) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // Cria o objeto da nova solicitação
    const novaSolicitacao = {
        titulo,
        rede,
        descricao,
        relevancia,
        status: 'Pendente',
        prazo,
    };

    // Armazena a nova solicitação no localStorage
    const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];
    solicitacoes.push(novaSolicitacao);
    localStorage.setItem('solicitacoes', JSON.stringify(solicitacoes));

    // Exibe o modal
    modal.style.display = 'flex';
});

// Fecha o modal ao clicar no botão OK
btnOk.addEventListener('click', function () {
    modal.style.display = 'none';
    window.location.href = 'painel.html'; // Redireciona para o painel principal
});

// Fecha o modal ao clicar no botão de fechar
fecharModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
