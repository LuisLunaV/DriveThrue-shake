import {postImages1080x1920, postImages1080x1152 } from "../services/api-post.js";
import{ BitacoraUpload } from '../class/bitacora.class.js'
// Selecciona los elementos de input del archivo
const inputFileUno = document.querySelector("#fileUno");
const inputFileDos = document.querySelector("#fileDos");

// Función para manejar eventos de input de archivo
export const eventInputFile = () => {
  // Evento para inputFileUno
  inputFileUno.addEventListener("change", ({ target }) => {
    let files = target.files;
    // Procesa el archivo seleccionado con las dimensiones adecuadas
    processFiles(files[0], "1080x1920");
  });

  // Evento para inputFileDos
  inputFileDos.addEventListener("change", ({ target }) => {
    let files = target.files;

    processFiles(files[0], "1080x1152");
  });
};

// Función para procesar archivos
function processFiles(file, dimensions) {
  const docType = file.type;
  const validExtensions = ["image/jpg", "image/jpeg"];

  // Verifica si el tipo de archivo es válido
  if (!validExtensions.includes(docType)) {
    return alert("El archivo no es válido");
  }

  const fileReader = new FileReader();

  fileReader.addEventListener("load", (event) => {
    const image = new Image();
    image.src = fileReader.result;

    // Cuando la imagen se carga completamente
    image.onload = function () {
      const width = this.width;
      const height = this.height;
      const imgDimensions = `${width}x${height}`;
      
      // Verifica si las dimensiones de la imagen coinciden con las esperadas
      if (dimensions !== imgDimensions) {
        return alert("La imagen no tiene las dimensiones necesarias para esta pantalla.");
      } else {
        // Si las dimensiones son correctas, carga el archivo
        uploadFile(file, dimensions);
      }
    };
  });

  fileReader.readAsDataURL(file);
}

// Función para subir archivos
async function uploadFile(file, dimensions) {
  // Dependiendo de las dimensiones, utiliza la función correspondiente para subir la imagen
  if (dimensions === "1080x1920") {
    const { msg } = await postImages1080x1920(file);
    alert(msg);
  }

  if (dimensions === "1080x1152") {
    const { msg } = await postImages1080x1152(file);
    alert(msg);
  }

  // Registramos los cambios en la bitacora
  const bitacoraUpload = new BitacoraUpload( file );
  bitacoraUpload.uploadImg();
}
