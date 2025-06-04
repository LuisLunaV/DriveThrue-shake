type TRutas = {
    carpetaPanel1080x1920: string,
    carpetaPanel1080x1152: string,
    carpeta1080x1920Uno: string,
    carpeta1080x1152Uno: string,
    carpeta1080x1920Dos: string,
    carpeta1080x1152Dos: string
}

// Modificamos las rutas para acceder desde dist
const rutas: TRutas ={
     carpetaPanel1080x1920: "../../public/assets/1080x1920",
     carpetaPanel1080x1152: "../../public/assets/1080x1152",
     carpeta1080x1920Uno : "../../../shake-drive-thru/shake-pantalla-uno/public/assets/1080x1920",
     carpeta1080x1920Dos:  "../../../shake-drive-thru/shake-pantalla-dos/public/assets/1080x1920",
     carpeta1080x1152Uno : "../../../shake-drive-thru/shake-pantalla-uno/public/assets/1080x1152",
     carpeta1080x1152Dos:  "../../../shake-drive-thru/shake-pantalla-dos/public/assets/1080x1152"
    }


    // *****Rutas TS*****
    // const rutas: TRutas ={
    //     carpetaPanel1080x1920: "../public/assets/1080x1920",
    //     carpetaPanel1080x1152: "../public/assets/1080x1152",
    //     carpeta1080x1920Uno : "../../shake-menus/menu-shake-uno/public/assets/1080x1920",
    //     carpeta1080x1920Dos: "../../shake-menus/menu-shake-dos/public/assets/1080x1920",
    //     carpeta1080x1152Uno : "../../shake-menus/menu-shake-uno/public/assets/1080x1152",
    //     carpeta1080x1152Dos: "../../shake-menus/menu-shake-dos/public/assets/1080x1152"
    
    //    }

    export{
        rutas
    }