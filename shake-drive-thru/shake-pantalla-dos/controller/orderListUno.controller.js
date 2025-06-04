const { request, response } = require("express");

const ordersListUno = {

  postOrderListUno: (req = request, res = response) => {
    try {
      const body = req.body;

      ordersListUno.emitToPrintOrder( body );

      res.status(200).json({
        msg: body
      });

    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  socketsControllerUno: ( socket ) => {
    ordersListUno.emitToPrintOrder = ( data ) => {
      socket.emit( "imprimir-pedido-uno", data );
    };
  },
};

module.exports = ordersListUno;
