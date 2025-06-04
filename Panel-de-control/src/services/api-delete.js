import { url,  deleteImage1080x1920, deleteImage1080x1152 } from './index.js';

const deleteImages1080x1920 = async( name ) =>{
    try {
        const resp = await fetch(`${url}${ deleteImage1080x1920}/${name}`,{
            method: 'DELETE'
        });
        if( resp.ok ){
            const { msg } = await resp.json();
            return msg;
        }else{
            const error = await resp.json();
            throw error;
        }
    } catch (error) {
        throw error;
    }
};

const deleteImages1080x1152 = async( name ) =>{
    try {
        const resp = await fetch(`${url}${ deleteImage1080x1152}/${name}`,{
            method: 'DELETE'
        });
        if( resp.ok ){
            const { msg } = await resp.json();
            return msg;
        }else{
            const error = await resp.json();
            throw error;
        }
    } catch (error) {
        throw error;
    }
};

export{
    deleteImages1080x1920,
    deleteImages1080x1152
}