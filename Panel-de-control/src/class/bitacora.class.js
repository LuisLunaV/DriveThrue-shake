import { postNewChange } from "../services/bitacora/api-post.js";
class Bitacora {
  constructor() {
    const { User_NumEmpleado, User_Name } = JSON.parse(sessionStorage.getItem("user"));
    this.date = new Date();
    this.empNumber = User_NumEmpleado;
    this.empName = User_Name;
    this.imgName;
    this.action;
    this.fecha = this.getDate();
    this.hour  = this.getHour();
  }

  async sendInformation() {
    const payload = {
      Bitacora_NumEmpleado: this.empNumber,
      Bitacora_Name: this.empName,
      Bitacora_Imagen: this.imgName,
      Bitacora_Movimiento: this.action,
      Bitacora_Fecha: this.fecha,
      Bitacora_Hora: this.hour
    };

    try {
      await postNewChange(payload);
    } catch (error) {
      console.log(error);
    }
  }

  getDate() {


    let day =   this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year =  this.date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return `${year}/${month}/${day}`;
  }
  getHour(){
    let hour = this.date.getHours();
    let min  = this.date.getMinutes()

    if (hour < 10) hour = `0${hour}`;
    if (min  < 10) min = `0${min}`;
    return `${hour}:${min}`;
  }
}

class BitacoraUpload extends Bitacora {
  constructor({ name }) {
    super();
    this.imgName = name;
  }
  uploadImg() {
    this.imgName;
    this.action = "upload";
    this.sendInformation();
  }
}

class BitacoraDelete extends Bitacora {
  constructor(name) {
    super();
    this.imgName = name;
  }

  deleteImg() {
    this.imgName;
    this.action = "delete";
    this.sendInformation();
  }
}

export { BitacoraUpload, BitacoraDelete };
