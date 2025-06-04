import multer from "multer"; 
import { v4 as uuidv4 } from 'uuid';

// Configuración del almacenamiento de archivos con multer.
const storage1080x1920 = multer.diskStorage({
  destination: function (req, file, cb) { // Define la carpeta de destino donde se almacenarán los archivos
    cb(null, "../shake-drive-thru/shake-pantalla-uno/public/assets/1080x1920");
    cb(null, "../shake-drive-thru/shake-pantalla-dos/public/assets/1080x1920");
    cb(null, "./public/assets/1080x1920");

  },

  filename: function (req, file, cb) { // Define el nombre del archivo una vez que se almacena en el destino
    cb(null, file.originalname);
    // cb(null, `${uuidv4()}.jpg` );
  },
});

// Configuración del middleware de multer para la carga de archivos
const upload1080x1920 = multer({ 
  storage: storage1080x1920, // Define el almacenamiento configurado anteriormente
  fileFilter: (req, file, cb) => { // Define una función para filtrar los archivos que se van a cargar
    const fileTypes = ['image/jpeg', 'image/jpg']; // Define los tipos de archivos permitidos

    // Comprueba si el tipo MIME del archivo subido está en la lista de tipos de archivo permitidos
    if (fileTypes.includes(file.mimetype)) {
      return cb(null, true); // Si es así, permite la carga del archivo
    }

    cb(null, false); // Si no, rechaza la carga del archivo
    cb(new Error('Imagen no válida')); // También se podría lanzar un error personalizado
  }
});

// Configuración del almacenamiento de archivos con multer.
const storage1080x1152 = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, "../shake-drive-thru/shake-pantalla-uno/public/assets/1080x1152");
    cb(null, "../shake-drive-thru/shake-pantalla-dos/public/assets/1080x1152");
    cb(null, "./public/assets/1080x1152");
  },

  filename: function (req, file, cb) { // Define el nombre del archivo una vez que se almacena en el destino
    // cb(null, `${uuidv4()}.jpg` );
    cb(null, file.originalname);
  },
});

const upload1080x1152 = multer({ 
  storage: storage1080x1152, 
  fileFilter: (req, file, cb) => { 
    const fileTypes = ['image/jpeg', 'image/jpg']; 

    if (fileTypes.includes(file.mimetype)) {
      return cb(null, true); 
    }

    cb(null, false); 
    cb(new Error('Imagen no válida'));
  }
});
export {
  upload1080x1920,
  upload1080x1152
}
