import { Sequelize } from 'sequelize';

const db = new Sequelize('panel-db','user','pass',{
        dialect: 'sqlite',
        host: ':memory',
        storage: './portal-turnos.sqlite'
});

const dbConnection = async (): Promise<void> => {
    try {
        await db.sync();
        console.log('Data base in line');
    } catch (error: any) {
        throw new Error(error);
    }
}

export {
    db,
    dbConnection
};
