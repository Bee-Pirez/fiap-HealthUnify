// exibir/ocultar senha
const senha = document.querySelector(".senha");
const icon_senha = document.querySelector('.visibilidade');
icon_senha.addEventListener('click', () => {
    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }
    senha.focus();
});

let inputCpf = document.querySelector('#cpf');

inputCpf.addEventListener('keypress', (e) => {
    const allowedChars = /[0-9.-]/;
    const inputChar = String.fromCharCode(e.charCode);

    if (!allowedChars.test(inputChar)) {
        e.preventDefault();
    }

    let inputCpfLength = inputCpf.value.length;

    if (inputCpfLength === 3 || inputCpfLength === 7) {
        inputCpf.value += '.';
    }
    if (inputCpfLength === 11) {
        inputCpf.value += '-';
    }
});




document.getElementById("formPaciente").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value
  };

  fetch('/pacientes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
        return response.json().then(error => {
            throw new Error(error.error);
        });
    }
    return response.json();
    })
  .then(data => {
        console.log('Success:', data);
        const popup = document.getElementById('popup');
        const popupBackground = document.getElementById('popup-background');
        popup.classList.add('show-popup');
        popupBackground.classList.add('show-popup-background');
  })
  .catch((error) => {
    console.error('Error:', error);
    const mensagemErro = document.querySelector('.mensagem');
    const mensagemErroTexto = document.querySelector('.mensagem-erro-texto');
    mensagemErroTexto.textContent = error.message;
    mensagemErro.classList.add('mostrar');

    const icon = document.querySelector('.fa-exclamation-triangle');
    icon.classList.add('blinking');

    setTimeout(() => {
        mensagemErro.classList.remove('mostrar');
        icon.classList.remove('blinking');
    }, 2000); 
  });
});

document.getElementById("close-popup").addEventListener("click", function() {
    const popup = document.getElementById('popup');
    const popupBackground = document.getElementById('popup-background');
    popup.classList.remove('show-popup');
    popupBackground.classList.remove('show-popup-background');
});
