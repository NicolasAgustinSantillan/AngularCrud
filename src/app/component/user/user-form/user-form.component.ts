import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateEmployee } from 'src/app/DTO/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public formEmployee: FormGroup;

  constructor(private formBuilder: FormBuilder, public employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const formGroup: { [k in keyof CreateEmployee]: any } = {
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]]
    };
    this.formEmployee = this.formBuilder.group(formGroup)    
  }

  send(): any {

    console.log(this.formEmployee)
    this.employeeService.addEmployee(this.formEmployee.value)
  }

  N(key: keyof CreateEmployee) {
    return key
  }

  getControl(key: keyof CreateEmployee) {
    return this.formEmployee?.get(key) as FormControl
  }
}