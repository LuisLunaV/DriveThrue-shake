import { Request, Response } from "express";
import bcryptjs from 'bcryptjs';
import { User } from "../models/users";
import { incompleteObjectProperties } from "../helpers/index";

export const users = {
  getUsers: async (req: Request, res: Response) => {
    try {
      const user = await User.findAll();
      res.status(200).json({
        user,
        msg: "Hola mundo desde controller",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        msg: "Fallo la busqueda de usuarios, comunicate con el administrador",
        error,
      });
    }
  },

  postUsers: async (req: Request, res: Response) => {
    try {
      const { body } = req;

      if (incompleteObjectProperties(body)) {
        return res.status(400).json({
          msg: "Se necesitan llenar todos los campos",
        });
      } else {
        
        const { User_NumEmpleado, User_Name, User_Email, User_Password } = body;

        const salt = bcryptjs.genSaltSync();
        
        const data = {
            User_NumEmpleado:User_NumEmpleado.toUpperCase(), 
            User_Name: User_Name.toUpperCase(), 
            User_Email, 
            User_Password: bcryptjs.hashSync( User_Password, salt),
        };
         
        const user = await User.create( data );

        res.status(200).json({
          user
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "Error al crear usuario",
        error,
      });
    }
  }
};
