const { request, response } = require("express");

const ordersListDos = {

  postOrderListDos: (req = request, res = response) => {
    try {
      const body = req.body;

      ordersListDos.emitToPrintOrder( body );

      res.status(200).json({
        msg: body
      });

    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  socketsControllerDos: ( socket ) => {
    ordersListDos.emitToPrintOrder = ( data ) => {
      socket.emit( "imprimir-pedido-dos", data );
    };
  },
};

module.exports = ordersListDos;
