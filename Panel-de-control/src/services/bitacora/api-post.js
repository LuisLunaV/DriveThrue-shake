import { url, bitacora } from '../index.js';

export const postNewChange = async (data) => {
    try {
      const resp = await fetch(`${url}${bitacora}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if (resp.ok) {
        const data = await resp.json();
        return data;
      } else{
        const error = await resp.json();
        throw error;
      } 
    } catch (error) {
      throw error;
    }
  };
  