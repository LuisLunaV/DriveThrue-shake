import { loginForm,registerForm } from '../auth/index.js';
import { detectWindow, validateSessionToken, validateRolBitacora, singOff } from '../helper/index.js'
import { loadedComponents } from '../util/index.js';
import { eventsMain, eventsModal, eventInputFile, eventBitacora } from "../events/index.js";
import { showUserName } from '../components/nav/userName.js';

export class Main {
  constructor() {
    this.window = detectWindow();
    this.login();
    this.events();
    this.bitacora();
  }
  login(){
    if( this.window === '/html/login.html'){
      loginForm();
    }

    if( this.window === '/html/register.html'){
      registerForm();
    }
  }
  events() {
    if( this.window === '/'){
      loadedComponents();
      validateSessionToken();
      showUserName();
      eventsMain();
      eventsModal();
      eventInputFile();
      singOff();
    }
  }

  bitacora(){
    if( this.window === '/html/bitacora.html'){
      loadedComponents();
      validateSessionToken();
      validateRolBitacora();
      eventBitacora();
      singOff();

    }
  }
}
