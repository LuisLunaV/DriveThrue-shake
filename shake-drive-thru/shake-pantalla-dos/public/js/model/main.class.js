import { getOrderList } from "../services/api-call.js";
import { imprimirPublicidad } from '../components/advertising-images.js';
import {
  socketsConnection,
  printNewOrder
} from "../index.js";

class Main {
  init() {
    this.printAdvertising();
    this.printOrderList();
    this.socket();
  }

  printOrderList() {
    printNewOrder();
  }
  socket() {
    socketsConnection();
  }
  servicesApi(){
    getOrderList();
  }

  printAdvertising(){
    imprimirPublicidad();
  }

}

export { Main };
