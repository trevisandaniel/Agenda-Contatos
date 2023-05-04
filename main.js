const form = document.getElementById('agenda_header_form');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputName = document.getElementById('name');
    const inputTel = document.getElementById('telephone');

    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const agenda = document.querySelector('tbody');
    agenda.innerHTML = linhas;


    inputName.value = '';
    inputTel.value = '';
    /*alert(`Nome: ${inputName.value} - Telefone: ${inputTel.value}`)*/
})