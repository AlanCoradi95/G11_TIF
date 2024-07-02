const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoController.js');

router.get('/', controller.getAllProductos);
router.get('/:id', controller.getProductoById);
router.post('/', controller.createProducto);
router.put('/:id', controller.updateProducto);
router.delete('/:id', controller.deleteProducto);

module.exports = router;