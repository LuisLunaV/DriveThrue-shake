import { url, bitacora } from '../index.js';
export const getBitacora = async( date )=>{
    try {
        const resp = await fetch(`${ url }${ bitacora}/users/${ date }`);
        if ( resp.ok ) {
            const data = await resp.json();
            return data;
        } else {
            const error = await resp.json();
            throw error;
        }
    } catch (error) {
        throw error;
    }
}