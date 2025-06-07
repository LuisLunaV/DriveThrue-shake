import express, { Application } from "express";
import { dbConnection } from '../db/config.db';
import { usersRouter, authRouter, uploadImageRouter, bitacoraRouter } from '../routers/index.routes';
import cors from 'cors';
class Server {
  private app: Application;
  private port: string;
  private paths = {
    users: "/api/v1/users",
    auth: "/api/v1/auth",
    uploadImages: "/api/v1/imagen",
    bitacora: "/api/v1/bitacora"
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8082";

    this.connectDB();
    this.middlewares();
    this.router();
  }

  async connectDB(){
    await dbConnection();
  }

  middlewares() {

   // Lectura del body
   this.app.use(cors({
  origin: ['http://localhost:8082','http://192.168.100.11:8080','http://192.168.100.11:8081'], // Cambia según tu frontend
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
   this.app.options('*', cors());
   this.app.use(express.json());
    this.app.use(express.static('public'));
    this.app.use(express.static('src'));
  }

  router() {
    this.app.use( this.paths.users, usersRouter );
    this.app.use( this.paths.auth, authRouter )
    this.app.use( this.paths.uploadImages, uploadImageRouter);
    this.app.use( this.paths.bitacora, bitacoraRouter );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en el puerto: ${this.port}`);
    });
  }
}

export default Server;
