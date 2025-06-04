import { getBitacora } from '../../services/bitacora/api-get.js';
const tbody = document.querySelector('tbody');
const htmlUsersBitacora =( value )=>{
    const html = `<tr>
    <td class='alinear'>${value.Bitacora_NumEmpleado}</td>
    <td class='alinear'>${value.Bitacora_Name}</td>
    <td class='alinear'>${value.Bitacora_Imagen}</td>
    <td class='alinear'>${value.Bitacora_Movimiento}</td>
    <td class='alinear'>${value.Bitacora_Fecha}</td>
    <td class='alinear'>${value.Bitacora_Hora}</td>
    </tr>
    `;
    tbody.innerHTML += html;
};

const showUserBitacora = async( date )=>{
   const { usersBitacora } = await getBitacora( date );
if(!usersBitacora.length){
    clearTableBody()
    alert(`No hay registros en la fecha:${ date }` );
    return;
}
   clearTableBody();
   usersBitacora.forEach( htmlUsersBitacora );
};

const clearTableBody =(  )=>{
    const tbody = document.querySelector('tbody');
    tbody.innerHTML='';
};

export{
    showUserBitacora
}