import { deleteImages1080x1920, deleteImages1080x1152 } from '../services/api-delete.js';
import{ BitacoraDelete } from '../class/bitacora.class.js'
import { clearModal } from '../components/uploadedImages.js';

const modalDePromociones = document.querySelector(".modal-promos");
const modalContenedorPromociones = document.querySelector(".contenedor-promos");

// Función para manejar los eventos del modal
export const eventsModal = () => {
  // Agrega un evento de escucha para los clics en el modal
  modalDePromociones.addEventListener('click', ({ target }) => {
    deleteImage(target); 
    closeModal(target); 
  });
}

// Función asincrónica para eliminar una imagen
async function deleteImage(target) {
  // Obtiene el nombre de la imagen y su atributo de valor de datos
  const name = target.id;
  const dataValue = target.getAttribute('data-value');

  // Verifica si el botón de eliminación fue clickeado
  if (target.classList.contains('btn-delete')) {
    // Solicita confirmación al usuario antes de eliminar la imagen
    const confirmDelete = confirm('¿Está seguro de eliminar esta imagen?');
    if (confirmDelete) {
      try {
        // Elimina la imagen correspondiente según su valor de datos
        if (dataValue === '1080x1920') {
          await deleteImages1080x1920(name);
        } 
        
        if (dataValue === '1080x1152') {
          await deleteImages1080x1152(name);
        }
        alert('Imagen eliminada');

        const bitacoraDelete = new BitacoraDelete( name );
        bitacoraDelete.deleteImg();

        removeImageFromModal(target);
      } catch (error) {
        console.error('Error al eliminar la imagen:', error);
        // Muestra un mensaje de alerta si ocurre un error al eliminar la imagen
        alert('Error al eliminar la imagen. Por favor, inténtelo de nuevo.');
      }
    }
  }
}


function closeModal(target) {
  if (target.closest(".contenedor-close-promos")) {
    modalDePromociones.classList.remove("mostrar");
    modalContenedorPromociones.classList.remove("tranformX-0");
    clearModal();
  }
}


function removeImageFromModal(target) {
  const imageContainer = document.querySelector(".promociones");
  const imageCard = target.closest(".card");
  imageContainer.removeChild(imageCard);
  
//Validamos si ya no existen elementos li en la lista ul
  const liElements = imageContainer.querySelectorAll('li');
  if(!liElements.length){
    modalDePromociones.classList.remove("mostrar");
    modalContenedorPromociones.classList.remove("tranformX-0");
  }
}
