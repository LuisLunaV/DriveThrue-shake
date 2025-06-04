import { DataTypes, Model } from 'sequelize';
import { db } from '../db/config.db';
import { IUser } from '../interfaces/IUsers';

class User extends Model<IUser> implements IUser {
    public User_Id!: number;
    public User_NumEmpleado!: string;
    public User_Name!: string;
    public User_Email!: string;
    public User_Password!: string;
    public User_Status!: number;
}

User.init({
    User_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    User_NumEmpleado: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    User_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    User_Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    User_Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    User_Status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    sequelize: db,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false
});

export { 
    User 
}