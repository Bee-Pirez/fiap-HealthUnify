document.addEventListener("DOMContentLoaded", function () {
  const userId = localStorage.getItem("userId");

  fetch(`/getPaciente/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error("Erro ao obter dados do usuário:", data.error);
      } else {
        document.getElementById("name").value = data.name;
        document.getElementById("celular").value = data.celular;
        document.getElementById("email").value = data.email;
        document.getElementById("nascimento").value = data.nascimento;
        document.getElementById("cpf").value = data.cpf;
        document.getElementById("senha").value = data.senha;
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const updateForm = document.querySelector(".perfil_form");

  updateForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = localStorage.getItem("userId");
    const name = document.getElementById("name").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const nascimento = document.getElementById("nascimento").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    const data = {
      name: name,
      email: email,
      celular: celular,
      nascimento: nascimento,
      cpf: cpf,
      senha: senha,
    };

    fetch(`/pacientes/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados do paciente atualizados com sucesso:", data);
        // Realize as ações necessárias após a atualização bem-sucedida
      })
      .catch((error) =>
        console.error("Erro ao atualizar dados do paciente:", error)
      );
  });
});

//upload imagem
document.addEventListener("DOMContentLoaded", function () {
  const userId = localStorage.getItem("userId");
  let userImage = document.getElementById("userImage");
  let imageUrl = `/uploads/paciente${userId}.jpeg`;

  userImage.src = imageUrl

  const uploadForm = document.getElementById("uploadForm");
  uploadForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(uploadForm);
    fetch(`/upload/${userId}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          userImage.src = data.imageUrl; // Substitua "data.imageUrl" com a URL real da imagem
        } else {
          console.error("Erro no upload da imagem:", data.error);
        }
      })
      .catch((error) => console.error("Erro:", error));
  });
});

