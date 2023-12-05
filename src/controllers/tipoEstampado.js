const { response } = require("express");

TipoEstampado = require("../models/tipoEstampado");

const getTipoEstampado = async (req, res) => {
  const tipoEstampado = await TipoEstampado.find(); //Obtener todos los dococumentos de una coleccion
  res.json({
    msg: tipoEstampado,
  });
};

const postTipoEstampado = async (req, res) => {
  const datos = req.body; //Capturar datos de la URL-postman
  let mensaje = "Insercion exitosa";
  try {
    const tipoEstampado = new TipoEstampado(datos); //Instanciar el objeto
    await tipoEstampado.save(); //Guardar en la base de datos
    console.log(tipoEstampado);
  } catch (error) {
    mensaje = error;
    console.log(error);
  }

  res.json({
    msg: mensaje,
  });
};

const putTipoEstampado = async (req, res) => {
  const { _id, tamano, tipo, precioTamano, precioTipo, total } =
    req.body;
  try {
    const tipoEstampado = await TipoEstampado.findOneAndUpdate(
      { _id: _id },
      {
        tamano: tamano,
        tipo: tipo,
        precioTamano: precioTamano,
        precioTipo: precioTipo,
        total: total,
      }
    ); //las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
    mensaje = "Actualizacion exitosa";
  } catch (error) {
    mensaje = error;
  }
  res.json({
    msg: mensaje,
  });
};

const deleteTipoEstampado = async (req, res) => {
  const { _id } = req.body; //Desestructurar
  try {
    const tipoEstampado = await TipoEstampado.findOneAndDelete({
      _id: _id,
    });
    mensaje = "Eliminacion exitosa";
  } catch (error) {
    mensaje = error;
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = {
  getTipoEstampado,
  postTipoEstampado,
  putTipoEstampado,
  deleteTipoEstampado,
};
