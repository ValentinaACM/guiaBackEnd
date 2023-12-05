const { Schema, model } = require("mongoose");

const ProductoSchema = {
  nombreProducto: {
    type: String,
    required: [true, "El nombre del producto es requerido"],
  },

  referenciaProducto: {
    type: String,
    required: [true, "La referencia del producto es requerida"],
  },
  precioProducto: {
    type: Number,
    required: [true, "El precio del producto es requerido"],
  },
  estadoProducto: {
    type: Boolean,
    default: true,
  },
};

module.exports = model("Producto", ProductoSchema);
