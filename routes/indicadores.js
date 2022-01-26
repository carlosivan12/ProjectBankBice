
const { Router } = require('express');

const { indicadoresGet } = require('../controllers/indicadores');

const router = Router();

router.get('/', indicadoresGet );

module.exports = router;