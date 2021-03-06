const { Router } = require('express');
const { pegaTodasAsPessoas } = require('../controllers/PessoaController');
const PessoaController = require('../controllers/PessoaController')


const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router