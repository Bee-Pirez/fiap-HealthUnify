const database = require('../models')

const path = require('path');
const fs = require('fs');

class PacienteController {

  //create
  static async criaPaciente (req, res) {
    const novoPaciente = req.body
    const { cpf } = novoPaciente;
    try {
      const pacienteExistente = await database.Pacientes.findOne({
        where: {
            cpf: cpf,
        },
    });
      if (pacienteExistente) {
        return res.status(400).json({ error: 'Um paciente com este CPF já existe.' });
      
      } else{
        const novoPacienteCriado = await database.Pacientes.create(novoPaciente)
        return res.status(200).json(novoPacienteCriado)

      }
    }catch(error) {
      return res.status(500).json(error.message)
    }
  }

  //read all
  static async getAllPatients(req, res) {
    try {
      const allPatients = await database.Pacientes.findAll({
        attributes: ['id', 'name', 'email', 'nascimento']
      });
      return res.status(200).json(allPatients);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  
  

  //atualizar um registro
  static async atualizaPaciente(req, res) {
    const userId = req.params.id;
    const novasInfos = req.body;
  
    try {
      // Atualize o paciente com base no ID fornecido
      await database.Pacientes.update(novasInfos, { where: { id: userId } });
  
      // Busque o paciente atualizado após a atualização
      const pacienteAtualizado = await database.Pacientes.findOne({ where: { id: userId } });
  
      if (!pacienteAtualizado) {
        return res.status(404).json({ error: 'Paciente não encontrado.' });
      }
  
      // Retorne o paciente atualizado como resposta
      return res.status(200).json(pacienteAtualizado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  

  //deletar um registro
  static async apagaPaciente(req, res) {
    const { id } = req.params
    try {
      await database.Pacientes.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // login
  static async fazLogin(req, res) {
    const { cpf, senha } = req.body;
    try {
      const paciente = await database.Pacientes.findOne({
        where: {
          cpf: cpf,
          senha: senha,
      },
      });

      if (paciente) {
        const idUsuario = paciente.id; // Obtendo o ID do usuário do objeto paciente

        // Se o login for bem-sucedido, retorne os detalhes do usuário, incluindo o ID e o nome.
        return res.status(200).json({
            id: idUsuario,
            nome: paciente.name,
        });
      } else {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
    } catch (error) {
    return res.status(500).json({ error: error.message });
    }
  }


//readone
  static async pegaUmPaciente(req, res) {
    const { id } = req.params;

    try {
      const paciente = await database.Pacientes.findOne({
        where: {
          id: id
        }
      });

    if (paciente) {
      return res.status(200).json(paciente);
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    } catch (error) {
    return res.status(500).json(error.message);
    }
  }



//uploadImage
static async uploadImagem(req, res) {
  try {
    const userId = req.params.id;
    const file = req.file;
    if (!file) {
      return res.status(400).json({ success: false, error: 'Nenhuma imagem foi fornecida.' });
    }
    const tempPath = file.path;
    const ext = path.extname(file.originalname); // Obtém a extensão do arquivo original
    const targetPath = path.join(__dirname, `../../uploads/paciente${userId}${ext}`); // Usa a extensão do arquivo original no nome do arquivo alvo

    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
    
    fs.rename(tempPath, targetPath, (err) => {
      if (err) return res.status(500).json({ success: false, error: err });
      const imageUrl = `uploads/paciente${userId}${ext}`;
      return res.status(200).json({ success: true, imageUrl });
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

}

module.exports = PacienteController
