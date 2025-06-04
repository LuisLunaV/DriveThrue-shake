import { verBitacora } from '../../events/bitacora/eventBitacora.js';
const divUserName = document.querySelector('.user-name')
const userNameHtml =( name )=>{
   const html = `<span>${name}</span>`;
   divUserName.innerHTML = html;
}

const userNameBitacoraHtml =( name )=>{
    const html =`
    <div class="div-btn-cerrar">
    <a id='ver-bitacora' class="btn-ver-bitacora"> Ver bitacora </a>
  </div>
    `;
    divUserName.innerHTML = html;
 }

 
const showUserName = () =>{
    const {User_Name, User_Status} = JSON.parse( sessionStorage.getItem('user'));
    if(User_Status === 2){
        userNameBitacoraHtml( User_Name );
        verBitacora();
        return;
    }
    userNameHtml( User_Name );
}

export{
    showUserName
}