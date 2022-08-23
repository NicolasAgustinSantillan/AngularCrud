# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

Como se creo el proyecto

PS D:\Softwares\CRUD-Ejemplo\frontend> ng new
PS D:\Softwares\CRUD-Ejemplo\frontend> npm i bootstrap jquery popper.js

dentro de angular.json 
{
	"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
}

Nuevo componete
PS D:\Softwares\CRUD-Ejemplo\frontend> ng g cl models/employee

dentro de tsconfig.json
"strictPropertyInitialization": false, 