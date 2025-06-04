import { Request, Response } from "express";
import bcryptjs from 'bcryptjs';
import { User } from "../models/users";
import { generarJWT } from '../helpers/generar-jwt';
export const authentication = async(req: Request, res: Response)=>{
    try {
        const { User_NumEmpleado, User_Password } = req.body;
        const user =  await User.findOne({ where:{ User_NumEmpleado }});

        if( !user ){
            return res.status(400).json({
                User_error: 'Usuario no existe'
            })
        }

        if( !user.User_Status){
            return res.status(401).json({
                User_error: 'Usuario dado de baja'
            })
        }

        const isMatched = bcryptjs.compareSync( User_Password, user.User_Password );

        if( !isMatched ){
            return res.status(401).json({
                Password_error: 'Password incorrecto'
            })
        }

        const token = await generarJWT( user.User_Id );


        res.status(200).json({
            user,
            token
        })
    } catch (error) {
        return res.status(500).json({
            error,
            msg: 'Hubo un error en el servidor'
        });
    }
}

