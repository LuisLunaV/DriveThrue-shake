import { getTotal } from "../index.js";

const total      = document.querySelector(".amount-total-total h2");
const totalModal = document.querySelector(".footer-order-total p");

const addTotals = (data) => {

  const result = getTotal(data);

  total.innerText      = `$${result.toFixed(2)}`;
  totalModal.innerText = `$${result.toFixed(2)}`;
};

const clearTotals =() => {
  let value = 0;
  total.innerText      = `$${value.toFixed(2)}`;
  totalModal.innerText = `$${value.toFixed(2)}`;
}

export{
  addTotals,
  clearTotals
}