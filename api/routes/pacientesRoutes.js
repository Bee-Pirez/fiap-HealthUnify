const { Router } = require('express')
const PacienteController = require("../controllers/PacienteController")
const upload = require("../middleware/multer");


const router = Router()

router.post('/pacientes', PacienteController.criaPaciente)
router.get('/pacientes', PacienteController.getAllPatients)
router.get('/getPaciente/:id', PacienteController.pegaUmPaciente)
router.put('/pacientes/:id', PacienteController.atualizaPaciente)
router.delete('/pacientes/:id', PacienteController.apagaPaciente)
router.post('/login', PacienteController.fazLogin)
router.post('/upload/:id', upload.single('avatar'), PacienteController.uploadImagem)



module.exports = router