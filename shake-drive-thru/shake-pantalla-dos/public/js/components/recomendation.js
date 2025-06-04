const divProductsShake = document.querySelector(".products-shake");
export const addRecomendatiosHtml =( data )=>{
const html = `
<div class="card-product" data-id="1">
<div class="div-product-img">
  <img src="assets/img/popular/${data.img}" alt="img-product" />
</div>
<div class="div-product-text">
  <div class="div-description">
    <h3>${data.nombre}</h3>
  </div>
  <div class="div-price">
    <p>$${data.precio.toFixed(2)}</p>
  </div>
</div>
</div>
`;

divProductsShake.innerHTML += html;
}