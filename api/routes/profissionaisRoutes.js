const { Router } = require('express');
const ProfissionalController = require("../controllers/ProfissionalController");

const router = Router();

router.post('/profissionais', ProfissionalController.fazLogin);
router.get('/getProfissional/:id', ProfissionalController.pegaUmProfissional)
router.put('/profissionais/:id', ProfissionalController.atualizaProfissional)

module.exports = router;
