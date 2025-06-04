import { url, allImages1080x1920, allImages1080x1152} from './index.js'

const getAllImages1080x1920 = async()=>{
    try{
        const resp = await fetch(`${url}${allImages1080x1920}`);

        if( resp.ok ){
            const data = await resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
    }catch( error ){
        throw error;
    }
}

const getAllImages1080x1152 = async()=>{
    try{
        const resp = await fetch(`${url}${allImages1080x1152}`);

        if( resp.ok ){
            const data = await resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
    }catch( error ){
        throw error;
    }
}

export{
    getAllImages1080x1920,
    getAllImages1080x1152
}