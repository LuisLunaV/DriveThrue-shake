import { Request, Response } from "express";
import fs from "fs";
import path from "path";

import { rutas } from './index';

export const uploadFiles = {
  readDirectory1080x1920: (req: Request, res: Response) => {
    
    const rutaDeArchivo = path.join(__dirname, rutas.carpetaPanel1080x1920);

    fs.readdir( rutaDeArchivo , (err, archivos) => {

      if (err) {
        console.error("Error al leer la carpeta:", err);
        return res.status(500).json({ 
          error: "Error al leer la carpeta",
          err 
        });
      }
      // Filtra los archivos con extensión .jpg
      const archivosJPG = archivos.filter((archivo) => {
        return path.extname(archivo).toLowerCase() === ".jpg";
      });

      // Imprime la lista de archivos .jpg
      res.status(200).json({
        ...archivosJPG,
      });
    });
  },

  readDirectory1080x1152: (req: Request, res: Response) => {
    
    const rutaDeArchivo = path.join(__dirname, rutas.carpetaPanel1080x1152);

    fs.readdir( rutaDeArchivo , (err, archivos) => {

      if (err) {
        console.error("Error al leer la carpeta:", err);
        return res.status(500).json({ 
          error: "Error al leer la carpeta",
          err 
        });
      }
      // Filtra los archivos con extensión .jpg
      const archivosJPG = archivos.filter((archivo) => {
        return path.extname(archivo).toLowerCase() === ".jpg";
      });

      // Imprime la lista de archivos .jpg
      res.status(200).json({
        ...archivosJPG,
      });
    });
  },

  uploadImage: (req: Request, res: Response) => {
    try {
      res.status(200).json({
        msg: `Imagen subida correctamente`,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Error al cargar imagen",
        error: error,
      });
    }
  },

  uploadMultiplesImages: (req: Request, res: Response) => {
    res.status(200).json({
      msg: `Imagenes subida correctamente`,
    });
  },

  deleteImage1080x1920: async(req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const rutaDeArchivoUno = path.join(__dirname, rutas.carpeta1080x1920Uno, `${id}`);
      const rutaDeArchivoDos = path.join(__dirname, rutas.carpeta1080x1920Dos, `${id}`);
      const rutaPanel        = path.join(__dirname, rutas.carpetaPanel1080x1920, `${id}`);

      await fs.promises.unlink(rutaDeArchivoUno);
      await fs.promises.unlink(rutaDeArchivoDos);
      await fs.promises.unlink(rutaPanel);

      res.status(200).json({
          msg: "Imagen eliminada en ambas rutas",
      });

  } catch ( error ) {
    res.status(500).json({
      msg: "Error, la imagen no existe",
      error: error,
    });
  }
  },


  deleteImage1080x1152: async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const rutaDeArchivoUno = path.join(__dirname, rutas.carpeta1080x1152Uno, `${id}`);
        const rutaDeArchivoDos = path.join(__dirname, rutas.carpeta1080x1152Dos, `${id}`);
        const rutaPanel        = path.join(__dirname, rutas.carpetaPanel1080x1152, `${id}`);

        await fs.promises.unlink(rutaDeArchivoUno);
        await fs.promises.unlink(rutaDeArchivoDos);
        await fs.promises.unlink(rutaPanel)

        res.status(200).json({
            msg: "Imagen eliminada en ambas rutas",
        });

    } catch ( error ) {
      res.status(500).json({
        msg: "Error, la imagen no existe",
        error: error,
      });
    }
},

};
