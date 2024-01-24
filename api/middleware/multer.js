const multer = require('multer');
const path = require('path');

// Configuração do multer para o armazenamento de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/')); // Diretório de destino para armazenar os arquivos
  },
  filename: function (req, file, cb) {
    const userId = req.params.id; // Obtém o ID do usuário dos parâmetros da solicitação
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Sufixo exclusivo para evitar conflitos de nomes
    const fileName = 'paciente' + userId + '-' + uniqueSuffix + path.extname(file.originalname); // Nome do arquivo final a ser armazenado
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;





