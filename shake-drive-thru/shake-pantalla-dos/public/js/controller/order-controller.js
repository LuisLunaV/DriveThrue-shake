import {
    addOrdersListHtml,
    addOrdersListCorrectHtml,
    addTotals,
    clearOrderList,
    clearTotals,
    scrollOrderUp,
    scrollOrderUpConfirm,
  } from "../index.js";
  
  // Elementos del DOM
  const advertisingModal = document.querySelector(".modal-publicidad");
  const confirmedModal   = document.querySelector(".modal-order-correct");

  const amountProducts   = document.querySelector(".amount-products");
  const amountProductsP   = document.querySelector(".amount-products p");

  let timer;
  
  // Función principal para imprimir una nueva orden
  export const printNewOrder = (newOrder) => {
    if (!newOrder) return;
  
    // Comprobación si la orden es para mostrar publicidad
    if ('publicidad' in newOrder) {
      return newOrder.publicidad ? addPublicity() : removePublicity();
    }
  
    // Comprobación si la orden es para confirmar
    if (newOrder.confirmarOrden) return orderConfirmed();
  
    // Limpiar la lista de orden y mostrar el menú
    clearOrderList();
    showMenuShacke();
    renderOrders(newOrder);
  };
  
  // Función para renderizar las órdenes
  function renderOrders(newOrder) {
    
    showAmountOrders( newOrder );

    newOrder.forEach((data) => {
      data.precio = parseInt(data.precio);
      addOrdersListHtml(data);
      addOrdersListCorrectHtml(data);
    });
  
    scrollOrderUp();
    adjustListSize(newOrder);
    addTotals(newOrder);
  }
  
  // Función para manejar la confirmación de la orden
  function orderConfirmed() {
    showConfirmationModal();
    setTimeout(()=>{
      scrollOrderUpConfirm();
    },3000)
    clearTimeout(timer);
  
    // Ocultar la confirmación después de un tiempo y mostrar la publicidad
    timer = setTimeout(() => {
      hideConfirmationModal();
      showAdvertisingModal();
      clearAmountOrders();
      clearOrderList();
      clearTotals();
    }, 20000);
  }
  
  // Función para mostrar el menú principal
  function showMenuShacke() {
    hideAdvertisingModal();
    clearTimeout(timer);
  
    // Mostrar la publicidad después de un tiempo
    timer = setTimeout(() => {
      showAdvertisingModal();
      clearAmountOrders();
      clearOrderList();
      clearTotals();
    }, 180000);
  }
  
  //Mostrar esfera con la cantidad de productos
  function showAmountOrders( orders ){
    const amount = orders.reduce( (acc, value )=>{
     return acc + Number( value.cantidad );
    }, 0)
    amountProducts.classList.add("show-amount");
    amountProductsP.innerText = amount;
  }

  // Función para ajustar el tamaño de la lista de órdenes
  function adjustListSize(list) {
    if (list.length > 4) {
      const ulListOrder = document.querySelector(".ulList-orders");
      const mountText = document.querySelectorAll(".order-amount h2");
      const priceText = document.querySelectorAll(".order-price p");
  
      ulListOrder.classList.add("gap-0");
      mountText.forEach((node) => {
        node.classList.add("height-min");
      });
  
      priceText.forEach((node) => {
        node.classList.add("height-min");
      });
    }
  }
  
  // Funciones para manejar la publicidad
  function addPublicity() {
    hideConfirmationModal();
    showAdvertisingModal();
    clearAmountOrders();
    clearOrderList();
    clearTotals();
  }
  
  function removePublicity() {
    hideAdvertisingModal();
  }

  //Ocultamos y reseteamos el elemento de cantidad de productos
  function clearAmountOrders(){
    amountProducts.classList.remove("show-amount");
    amountProductsP.innerText = 0;
  }

  // Funciones para mostrar/ocultar la ventana de confirmación
  function showConfirmationModal() {
    confirmedModal.classList.remove("display-off");
    setTimeout(()=>{
      confirmedModal.classList.remove("ocultar-order-list");
    },500)
  }
  
  function hideConfirmationModal() {
    confirmedModal.classList.add("ocultar-order-list");
    confirmedModal.classList.add("display-off");

  }
  
  // Funciones para mostrar/ocultar la publicidad
  function showAdvertisingModal() {
    advertisingModal.classList.remove("display-off");
      advertisingModal.classList.remove("ocultar-advertising");
      setTimeout(()=>{
        location.reload();
      },1000);
  }
  
  function hideAdvertisingModal() {
    advertisingModal.classList.add("ocultar-advertising");
    setTimeout(()=>{
      advertisingModal.classList.add("display-off");
    },1000)
  }
  