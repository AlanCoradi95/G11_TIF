const express = require('express');
const router = express.Router();
const controller = require('../controllers/detalleVentaController.js');

router.get('/', controller.getAllDetalleVenta);
router.get('/:id_venta', controller.getAllDetalleVentaByVentaId);
router.get('/:id_venta/producto', controller.getDetalleVentaByProductoId);
router.post('/:id_venta', controller.createDetalleVenta);
router.put('/:id_venta', controller.updateDetalleVenta);
router.delete('/:id_venta', controller.deleteDetalleVenta);

module.exports = router;