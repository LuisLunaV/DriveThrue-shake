import { Request, Response } from "express";
import { Op } from 'sequelize';
import { Bitacora } from "../models/bitacora";

export const bitacora = {

  getUsersBitacora: async ( req: Request, res: Response )=>{
try {
  const { date } = req.params;

  const usersBitacora = await Bitacora.findAll({
    where:{
      Bitacora_Fecha: {
        [Op.eq]: date
      }
    }
  });

  return res.status(200).json({
    usersBitacora,
  });
  
} catch (error) {
  return res.status(500).json({
    msg: "Error al realizar busqueda en la bitacora",
    error,
  });
}
  },

  postNewChange : async (req: Request, res: Response) => {
    try {
      const { body } = req;
      await Bitacora.create( body );
      res.status(200).json({
        msg: 'Registro creado'
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error al crear el registro en la bitacora",
        error,
      });
    }
  }
  

}

