import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public form: FormGroup;

  EmployeeArray: Employee[] = [
    {id: 1, name: "Juan", country: "USA"},
    {id: 2, name: "Tomy", country: "USA"},
    {id: 3, name: "Fede", country: "USA"},
  ];  

  
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void{
    const ParaLosFormulariosTipo1  = {
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    }
    this.form = this.formBuilder.group(ParaLosFormulariosTipo1);
  }

  ngDoCheck(){

  }
  
  send(): any {
    let EmployeeAdd: Employee = {
      id : 0,
      name : '',
      country : ''
    };  

    EmployeeAdd.id = this.EmployeeArray.length + 1;
    EmployeeAdd.name = this.form.value.name;
    EmployeeAdd.country = this.form.value.country;
    //spread
    this.EmployeeArray = [EmployeeAdd, ...this.EmployeeArray];

    this.EmployeeArray.sort( (a, b)=> b.id - a.id);
    this.EmployeeArray = this.EmployeeArray.filter((employee)=> employee.name != 'hola');



    console.log(this.EmployeeArray);
  }
}
