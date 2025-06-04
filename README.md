### En nivel de ambas carpetas panel y menus, intalamos paquetes de dependencias `npm init -y ` para ejecutar ambos proyectos al mismo nivel.

1. Instalamos concurrently: `npm i concurrently --save-dev`como dependencias de desarrollo.

2. Configuramos el package.json an su propiedad:
 ```script` paraejecutar los tres proyectos:
   `"scripts": {
   "start": "concurrently \"cd Panel-de-control && npm start\" \"cd shake-drive-thru/shake-pantalla-uno && npm start\" \"cd shake-drive-thru/shake-pantalla-dos && npm start\"",

"dev": "concurrently \"cd Panel-de-control && npm run dev\" \"cd shake-drive-thru && npm run dev\""
},```

### Para ejecutar el proyecto solo ejecutamos `npm start` desde este nivel de carpeta.
