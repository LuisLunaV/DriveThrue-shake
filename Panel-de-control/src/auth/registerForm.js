import { postUserCreate } from '../services/auth/login-post.js';
import { formData, comparePasswords } from '../helper/index.js';
const formRegister = document.querySelector('.form-registro');

export const registerForm = ( ) =>{
    formRegister.addEventListener('submit', async(e)=>{
        e.preventDefault();
             //Validamos si los password en el registro son diferentes.
      if( !comparePasswords() ){
        alert('Las contraseñas no coinciden');
        location.reload();
        return;
      }  

        const { User_PassworDos, ...rest } = formData( formRegister );
  
          //Enviamos la data para el registro
          const resp = await postUserCreate( rest )
          .catch((err)=>{
           err.forEach( ( { msg } ) => {
               alert( msg );
           });
           location.reload();
          });
   
          //Validamos que nuestra respuesta haya sido positiva
          if( resp ){
           alert(`Usuario resgitrado con exito`)
               formRegister.reset();
               window.location.replace('/html/login.html');
          }
    });
};