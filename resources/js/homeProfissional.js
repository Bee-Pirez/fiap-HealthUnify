document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('userName');
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (userName) {
      welcomeMessage.textContent += userName;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const tableBody = document.querySelector('tbody');

  function preencherTabela() {
    fetch('/pacientes')
      .then(response => response.json())
      .then(data => {
        data.forEach(paciente => {
          const row = tableBody.insertRow();
          const idCell = row.insertCell(0);
          const nomeCell = row.insertCell(1);
          const emailCell = row.insertCell(2);
          const dataNascimentoCell = row.insertCell(3);
          const linkCell = row.insertCell(4);

          idCell.innerText = paciente.id; 
          nomeCell.innerText = paciente.name;  
          emailCell.innerText = paciente.email;
          dataNascimentoCell.innerText = paciente.nascimento;  

          const link = document.createElement('a');
          link.href = `enviarDocumentoMedico.html`; 
          link.innerText = 'Enviar arquivo';
          linkCell.appendChild(link);

        });
      })
      .catch(error => console.error('Erro ao buscar pacientes:', error));
  }

  preencherTabela();
});







