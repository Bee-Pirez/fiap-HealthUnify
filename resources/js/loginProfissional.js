document.addEventListener('DOMContentLoaded', function() {
  const formProfissional = document.getElementById('formProfissional');

  formProfissional.addEventListener('submit', function(event) {
      event.preventDefault();

      const crm = document.getElementById('crm').value;
      const senha = document.getElementById('senha').value;

      const data = {
          crm: crm,
          senha: senha
      };

      fetch('/profissionais', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          if (data.id) {
              localStorage.setItem('userId', data.id);
              localStorage.setItem('userName', data.nome);
              window.location.href = './homeProfissional.html';
          } else {
              console.error('Credenciais inválidas.');
          }
      })
      .catch(error => console.error('Erro:', error));
  });
});
