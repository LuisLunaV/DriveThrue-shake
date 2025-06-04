import { url, auth, register } from '../index.js';

const postLogin = async (data) => {
    try {
      console.log(data)
      const resp = await fetch(`${url}${auth}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if (resp.ok) {
        console.log(resp)
        const data = await resp.json();
        return data;
      } else{
        const error = await resp.json();
        console.log(error)
        throw error;
      } 
    } catch (error) {
      throw error;
    }
  };
  
  const postUserCreate = async( data )=>{
    try {
      const resp = await fetch(`${url}${register}`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if( resp.ok ){
        const data = await resp.json();
        return data;
      }else{
        const {errors} = await resp.json();
        throw errors;
      } 
    } catch (error) {
      throw error;
    }
  };

  export{
    postLogin,
    postUserCreate
  }