import { addOrdersListHtml, addOrdersListCorrectHtml, clearOrderList } from "./components/order-list.js";
import { addRecomendatiosHtml } from "./components/recomendation.js";
import { addPopularsHtml } from "./components/populars.js";
import { addTotals, clearTotals } from "./components/totals.js";

import { carousel } from "./util/swiper.js";
import { scrollOrderUp, scrollOrderUpConfirm } from "./util/scorll-order-up.js";

import { socketsConnection } from "./services/socket.cliente.js";

import { getTotal } from "./helper/calculateTheTotal.js";
import { printNewOrder } from "./controller/order-controller.js";

export{
    addOrdersListHtml,
    addOrdersListCorrectHtml,
    clearOrderList,
    addRecomendatiosHtml,
    addPopularsHtml,
    addTotals,
    clearTotals,
    carousel,
    scrollOrderUp,
    scrollOrderUpConfirm,
    getTotal,
    socketsConnection,
    printNewOrder
}