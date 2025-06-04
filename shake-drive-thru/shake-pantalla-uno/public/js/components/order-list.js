const ulListOrders = document.querySelector(".ulList-orders");
const ulListOrdersCorrect = document.querySelector(".ulList-orders-correct");

const addOrdersListHtml = (data) => {
  const html = `<li class="ulList-orders-li">
    <div class="ulList-orders-li-div">
    <div class="order-amount">
      <h2 class="height-min">${data.cantidad}</h2>
    </div>
    <div class="order-type">
      <h3>${data.description}</h3>
    </div>
    <div class="order-price">
     <p class="height-min">$${data.precio.toFixed(2)}</p>
    </div>
  </div>
    <ul class="ul-order-content">
    ${data.modificadores ? generateListOfExtras(data.modificadores) : ""}
    </ul>
  </li>
`;
  ulListOrders.innerHTML += html;
};

const addOrdersListCorrectHtml = (data) => {
  const html = `<li class="ulList-orders-li-correct">
  <div class="ulList-orders-li-div">
  <div class="order-amount-correct">
    <h2 class="height-min">${data.cantidad}</h2>
  </div>
  <div class="order-type-correct">
    <h3>${data.description}</h3>
  </div>
  <div class="order-price-correct">
   <p class="height-min">$${data.precio.toFixed(2)}</p>
  </div>
</div>
  <ul class="ul-order-content-correct">
  ${data.modificadores ? generateListOfExtras(data.modificadores) : ""}
  </ul>
</li>`;
  ulListOrdersCorrect.innerHTML += html;
};

function generateListOfExtras(extras) {
  const listOfExtras = extras.map((values) => `<li>${values}</li>`).join("");

  return listOfExtras;
}

const clearOrderList = () => {
  ulListOrders.innerHTML = "";
  ulListOrdersCorrect.innerHTML = "";
};

export { addOrdersListHtml, addOrdersListCorrectHtml, clearOrderList };
