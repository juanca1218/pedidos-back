const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    pedido: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Venta', ventaSchema);
