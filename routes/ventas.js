const express = require('express');
const router = express.Router();
const Venta = require('../models/Venta');

// Crear venta
router.post('/ventas', async (req, res) => {
    try {
        const { nombre, pedido } = req.body;
        const nuevaVenta = new Venta({ nombre, pedido });
        await nuevaVenta.save();
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la venta' });
    }
});

// Obtener todas las ventas
router.get('/ventas', async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
});

module.exports = router;
