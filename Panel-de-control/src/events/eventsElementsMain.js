import { getAllImages1080x1920, getAllImages1080x1152 } from '../services/api-get.js';
import { uploadedImgPrincipalHtml, uploadedImgSecondarylHtml } from '../components/uploadedImages.js';

// Selecciona los elementos del DOM necesarios
const upLoadContainer = document.querySelector('.main-options'),
      modalDePromociones = document.querySelector(".modal-promos"),
      modalContenedorPromociones = document.querySelector(".contenedor-promos");

// Función para manejar eventos principales
export const eventsMain = () => {
    upLoadContainer.addEventListener('click', ({ target, localName }) => {
        const id = target.id;

        // Verifica si el elemento clickeado es un botón de mostrar imágenes
        if (target.className === 'btnShowImg') {
            // Determina qué tipo de imágenes mostrar basado en el ID del botón
            (id === 'btn-1080-1920') ? btnShowImages1080x1920() : btnShowImages1080x1152();
        }
    });
}

// Función para mostrar imágenes de 1080x1920
const btnShowImages1080x1920 = async () => {
   
    // Obtiene todas las imágenes de 1080x1920
    const mainImages = await getAllImages1080x1920();
    if(!Object.keys(mainImages).length){
        return alert('No hay imagenes para mostrar');
       }
     // Muestra el modal de imágenes
     showModalImg();
    // Itera sobre las imágenes y las agrega al contenedor principal
    Object.values(mainImages).forEach((value) => {
        uploadedImgPrincipalHtml(value);
    });
}

// Función para mostrar imágenes de 1080x1152
const btnShowImages1080x1152 = async () => {   
    // Obtiene todas las imágenes de 1080x1152
    const secondaryImages = await getAllImages1080x1152();
   if(!Object.keys(secondaryImages).length){
    return alert('No hay imagenes para mostrar');
   }
    // Muestra el modal de imágenes
    showModalImg();
    // Itera sobre las imágenes y las agrega al contenedor secundario
    Object.values(secondaryImages).forEach((value) => {
        uploadedImgSecondarylHtml(value);
    });
}

// Función para mostrar el modal de imágenes
function showModalImg() {
    // Agrega clases para mostrar el modal y su contenido
    modalDePromociones.classList.add('mostrar');
    modalContenedorPromociones.classList.add('tranformX-0');
}
