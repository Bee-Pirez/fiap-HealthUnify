const database = require("../models");

class ProfissionalController {
  // login
  static async fazLogin(req, res) {
    const { crm, senha } = req.body;
    try {
      const profissional = await database.Medicos.findOne({
        where: {
          crm: crm,
          senha: senha,
        },
      });

      if (profissional) {
        const idUsuario = profissional.id; // Obtendo o ID do usuário do objeto paciente

        // Se o login for bem-sucedido, retorne os detalhes do usuário, incluindo o ID e o nome.
        return res.status(200).json({
          id: idUsuario,
          nome: profissional.name,
        });
      } else {
        return res.status(401).json({ error: "Credenciais inválidas." });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //readone
  static async pegaUmProfissional(req, res) {
    const { id } = req.params;

    try {
      const medico = await database.Medicos.findOne({
        where: {
          id: id,
        },
      });

      if (medico) {
        return res.status(200).json(medico);
      } else {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //atualizar um registro
  static async atualizaProfissional(req, res) {
    const userId = req.params.id;
    const novasInfos = req.body;
  
    try {
      // Atualize o paciente com base no ID fornecido
      await database.Medicos.update(novasInfos, { where: { id: userId } });
  
      // Busque o paciente atualizado após a atualização
      const profissionalAtualizado = await database.Medicos.findOne({ where: { id: userId } });
  
      if (!profissionalAtualizado) {
        return res.status(404).json({ error: 'Medico não encontrado.' });
      }
  
      // Retorne o paciente atualizado como resposta
      return res.status(200).json(profissionalAtualizado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }


}

module.exports = ProfissionalController;
