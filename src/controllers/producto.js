const { response } = require("express");

Producto = require("../models/producto");

const getProducto = async (req, res) => {
  const producto = await Producto.find(); //Obtener todos los dococumentos de una coleccion
  res.json({
    msg: producto,
  });
};

const postProducto = async (req, res) => {
  const datos = req.body; //Capturar datos de la URL-postman
  let mensaje = "Insercion exitosa";
  try {
    const producto = new Producto(datos); //Instanciar el objeto
    await producto.save(); //Guardar en la base de datos
    console.log(producto);
  } catch (error) {
    mensaje = error;
    console.log(error);
  }

  res.json({
    msg: mensaje,
  });
};

const putProducto = async (req, res) => {
  const { _id, nombreProducto, referenciaProducto,precioProducto, estadoProducto } =
    req.body;
  try {
    const producto = await Producto.findOneAndUpdate(
      { _id: _id },
      {
        nombreProducto: nombreProducto,
        referenciaProducto: referenciaProducto,
        precioProducto: precioProducto,
        estadoProducto: estadoProducto,
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

const deleteProducto = async (req, res) => {
  const { _id } = req.body; //Desestructurar
  try {
    const producto = await Producto.findOneAndDelete({ _id: _id });
    mensaje = "Eliminacion exitosa";
  } catch (error) {
    mensaje = error;
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = {
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
};
