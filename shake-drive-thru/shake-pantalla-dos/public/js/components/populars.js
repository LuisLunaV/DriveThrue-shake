const divCardRecommendation = document.querySelector(".div-card-recommendation");
let contador = 2;
export const addPopularsHtml =( data )=>{
    // console.log(data)
const html = `
<div class="card-recommendation swiper-slide slide-${contador} slide-item img-${contador}"
data-id="${contador}" >
<div class="img-text-recomendation">
  <div class="img-recommendation">
    <img src="assets/img/recomendacion/${data.img}" alt="img-popular" />
  </div>
  <div class="price-recommendation">
    <p>$${data.precio.toFixed(2)}</p>
  </div>
</div>
<div class="desc-recomendation">
  <p>${data.nombre}</p>
</div>
</div>
`;

divCardRecommendation.innerHTML += html;
contador ++;
}