import { validateSessionToken } from '../helper/index.js'
export const singOff = () => {
  const btnCerrar = document.querySelector("#cerrar-sesion-panel");

  btnCerrar.addEventListener("click", () => {
    const resp = confirm("¿Está seguro de que desea cerrar sesión?");
    if( resp ){
      limpiarSessionStorage();
      validateSessionToken();
    }
  });
};

function limpiarSessionStorage() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
}
