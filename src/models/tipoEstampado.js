const { Schema, model } = require("mongoose");

const TipoEstampadoSchema = {
  tamano: {
    type: Number,
    required: [true, "El tamaño del estampado es requerido"],
  },

  tipo: {
    type: String,
    required: [true, "El tipo del estampado es requerido"],
    enum: ['Sublimación', 'Vinilo'], // Asegúrate de que 'Sublimación' esté incluido aquí
},
  precioTamano: {
    type: Number,
    required: [true, "El precio del tamaño del estampado es requerido"],
  },
  precioTipo: {
    type: Number,
    required: [true, "El precio del tipo del estampado es requerido"],
  },
  total: {
    type: Number,
    required: [true, "El total es requerido"],
  },
};

module.exports = model("TipoEstampado", TipoEstampadoSchema);
