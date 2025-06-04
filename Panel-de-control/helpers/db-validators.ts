import { User } from '../models/users'

const userExists = async( User_NumEmpleado: string )=>{

    const userExists = await User.findOne({
        where: { User_NumEmpleado }
    });

    if( userExists ){
        throw new Error( `El usuario ${ User_NumEmpleado} ya esta siendo utilizado` );
    }
};



const userExistById = async( id: number )=>{
    
    const userExist = await User.findByPk( id );

    if( !userExist ){
        throw new Error(`El usuario con id: ${ id }, no existe`);
    }
};

const emailExist = async( User_Email: string )=>{
    const emailExist = await User.findOne({ where: { User_Email }});

    if( emailExist ){
        throw new Error(`El correo ${ User_Email } ya ha sido registrado`);
    }
};




export{
    userExists,
    userExistById,
    emailExist
};