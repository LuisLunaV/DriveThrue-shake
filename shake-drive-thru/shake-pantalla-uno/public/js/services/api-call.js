import { url } from './index.js';



const getOrderList = async(   ) =>{
  
    try {
 
        console.log('services api')
        const resp = await fetch(`${ url }/api/v1/orderList`);
        
        if( resp.ok ){
         // Si la petición al servidor es exitosa, almacenamos el producto en la caché.
            const data = await resp.json();

            return data;
        
        } else throw new Error('No se pudo realizar la peticion');
    
    } catch (error) {
    
        throw error;
    
    }
}

export{
    getOrderList
}