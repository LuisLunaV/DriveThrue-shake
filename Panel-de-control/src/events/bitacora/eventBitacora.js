import { showUserBitacora } from '../../components/bitacora/showUsersBitacora.js';
const formBitacora = document.querySelector('.form-bitacora');
const prevPanel = document.querySelector('#regresar-sesion-panel');

const eventBitacora=()=>{
    formBitacora.addEventListener('change', ( { target } )=>{
        const fecha = target.value;
        showUserBitacora( fecha );
    });

    prevPanel.addEventListener('click', ()=>{
        window.location.replace('/');
    });
}

const verBitacora=()=>{
const btnVerVitacora = document.querySelector('#ver-bitacora');
    btnVerVitacora.addEventListener('click',()=>{
        window.location.replace('/html/bitacora.html');
    });
}


export{
eventBitacora,
verBitacora
}