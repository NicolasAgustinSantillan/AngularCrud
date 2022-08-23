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

============================ INICIO PROYECTO ============================
 DENTRO DE TSCONFIG.JSON -- > "strictPropertyInitialization": false,

 DENTRO DEL MODULO
 import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

    
============================ VALIDACIONES ============================
TypeScript;

ngOnInit(): void{
    const ParaLosFormulariosTipo1  = {
    
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],

    Validators.required = Comprueba que el campo sea llenado.
    Validators.minLength = Comprueba que el campo cumpla con un mínimo de caracteres.
    Validators.maxLength = Comprueba que el campo cumpla con un máximo de caracteres.
    Validators.pattern = Comprueba que el campo cumpla con un patrón usando una expresión regular.
    Validators.email = Comprueba que el campo cumpla con un patrón de correo válido.
    }
    this.form = this.formBuilder.group(ParaLosFormulariosTipo1);
  }

  HTML;

        <form [formGroup]="form" (ngSubmit)="send()">
            <input type="text" placeholder="Insert A Name" formControlName="name">
            <input type="text" placeholder="Insert A country" formControlName="country">

             <button type="submit" *ngIf="form.status == 'VALID'">Send</button>
        </form>   

============================ SPREAD ============================
