const ulList = document.querySelector('.promociones');
const uploadedImgPrincipalHtml=( imagen )=>{
   const html = `<li class="card">
   <div class="card-img" >
   <img src="./assets/1080x1920/${imagen}" alt="img_producto" />
 </div>
 <div class="card-contenido" >
 <img src="assets/svg/trash.svg" id='${imagen}' class="btn-delete" data-value="1080x1920">
 </div>
 </li>`;

 ulList.innerHTML += html;
}

const uploadedImgSecondarylHtml=( imagen )=>{
  const html = `<li class="card">
  <div class="card-img" >
  <img src="./assets/1080x1152/${imagen}" alt="img_producto" />
</div>
<div class="card-contenido" >
<img src="assets/svg/trash.svg" id='${imagen}' class="btn-delete" data-value="1080x1152">
</div>
</li>`;

ulList.innerHTML += html;
}



const clearModal =()=>{
  ulList.innerHTML = '';
}

export{
  clearModal,
  uploadedImgPrincipalHtml,
  uploadedImgSecondarylHtml
}

