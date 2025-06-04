const express = require("express");
const cors = require("cors");

const { socketsControllerUno } = require("../controller/orderListUno.controller.js");
const { socketsControllerDos } = require("../controller/orderListDos.controller.js");

class Server {
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io     = require("socket.io")(this.server);
    this.path = {
      mainAdvertising: "/api/v1/mainAdvertising",
      advertising:     "/api/v1/advertising",
      recommendation:  "/api/v1/recommendation",
      orderListUno:    "/api/v1/orderListUno",
      orderListDos:    "/api/v1/orderListDos",

    };

    this.middlewares();
    this.sockets();
    this.router();
  }
  middlewares() {
    this.app.use(cors( ));
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  sockets(){
    this.io.on("connection", socketsControllerUno );
    this.io.on("connection", socketsControllerDos );

  }

  router(){
    this.app.use( this.path.orderListUno, require("../routes/orderListUno.routes.js")),
    this.app.use( this.path.orderListDos, require("../routes/orderListDos.routes.js"));

  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor levantado en el puerto: ${this.port}`);
    });
  }
}

module.exports = {
    Server
}