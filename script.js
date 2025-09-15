// Mostra data e hora atual no topo
function mostrarDataHora() {
    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR', { hour12: false });
    const header = document.querySelector('header');

    let info = document.getElementById('dataHora');
    if (!info) {
        info = document.createElement('p');
        info.id = 'dataHora';
        header.appendChild(info);
    }
    info.textContent = `Data e Hora Atual: ${dataHora}`;
}

setInterval(mostrarDataHora, 1000);

// Validação simples do agendamento
document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = document.getElementById('dataAgendamento').value;
    const hoje = new Date().toISOString().split('T')[0];
    if (data < hoje) {
        alert('A data escolhida não pode ser anterior a hoje.');
        return;
    }
    alert('Agendamento realizado com sucesso!');
});

// Validação simples do cadastro
document.getElementById('formCliente').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
});