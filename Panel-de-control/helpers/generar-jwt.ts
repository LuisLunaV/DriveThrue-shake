import jwt from 'jsonwebtoken';

const generarJWT =( id: number )=>{
    return new Promise((resolve, reject)=>{

        const payload = { id };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY||'p0RtaL7urN0Ssha', {
            expiresIn: '12h'
        }, ( err, token )=>{
            if (err) {
                reject( 'No se pude generar el token' );
            } else {
                resolve( token );
            }
        })
    })
};

export{
    generarJWT
}