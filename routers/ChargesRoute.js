const express = require('express')//requeriri express

const router = express.Router();

const ChargesController = require('../controller/ChargesController'); //leer controladores

// get - obtener(traerme/mostrarme) infomracón
// post - agregar o modificar información

router.get('/find', ChargesController.findAll)
router.get('/findID', ChargesController.findID)
router.post('/insert', ChargesController.addNew)
router.delete('/delete', ChargesController.deleteForID)

module.exports = router //exportar routers