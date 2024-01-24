document.addEventListener("DOMContentLoaded", function () {
  const userId = localStorage.getItem("userId");

  fetch(`/getProfissional/${userId}`, {
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
        document.getElementById("email").value = data.email;
        document.getElementById("crm").value = data.crm;
        document.getElementById("especialidade").value = data.especialidade;
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
    const email = document.getElementById("email").value;
    const crm = document.getElementById("crm").value;
    const especialidade = document.getElementById("especialidade").value;
    const senha = document.getElementById("senha").value;

    const data = {
      name: name,
      email: email,
      crm: crm,
      especialidade: especialidade,
      senha: senha,
    };

    fetch(`/profissionais/${userId}`, {
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
