import { DataTypes, Model } from 'sequelize';
import { db } from '../db/config.db';
import { IBitacora } from '../interfaces/IBitacora';

class Bitacora extends Model<IBitacora> implements IBitacora{
    public Bitacora_Id!:number;
    public Bitacora_NumEmpleado!:string;
    public Bitacora_Name!:string;
    public Bitacora_Imagen!:string;
    public Bitacora_Movimiento!:string;
    public Bitacora_Fecha!:Date;
    public Bitacora_Hora!:string;

}

Bitacora.init({
Bitacora_Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
Bitacora_NumEmpleado: {
    type: DataTypes.STRING,
    allowNull: false
},
Bitacora_Name: {
    type: DataTypes.STRING,
    allowNull: false
},
Bitacora_Imagen: {
    type: DataTypes.STRING,
    allowNull: false
},
Bitacora_Movimiento: {
    type: DataTypes.STRING,
    allowNull: false
},
Bitacora_Fecha: {
    type: DataTypes.DATE,
    allowNull: false
},
Bitacora_Hora:{
    type: DataTypes.STRING,
    allowNull: false
}
},{
    sequelize:db,
    modelName: 'Bitacora',
    tableName: 'Bitacora',
    timestamps: false

});

export{
    Bitacora
}
