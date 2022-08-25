import { Injectable } from '@angular/core';
import { Employee, CreateEmployee } from '../DTO/employee';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  mensaje : string = 'Hola mundo !'
  EmployeeArray: Employee[] = [];
  constructor(private http : HttpClient) {
    this.getEmployee();
  }

 async getEmployee(){
    await this.http.get(`${environment.urlBase}/employee`).toPromise().then((res)=>{
      this.EmployeeArray = <Employee[]>res
    }).catch((err) => {
      //Traigo los datos mocks
      this.EmployeeArray = [
        {id: 1, name: "Juan", country: "USA"},
        {id: 2, name: "Tomy", country: "USA"},
        {id: 3, name: "Fede", country: "USA"},]
    })
  }

  async addEmployee(newEmployee: {name:string, country:string}){
    await this.http.post<Employee>(`${environment.urlBase}/employee`, newEmployee).toPromise().then((employee)=>{

      if (employee) {
        this.EmployeeArray = [...this.EmployeeArray, employee]
      }
    }).catch((err) => {
      this.addEmployeeMook(newEmployee)
    })
  }

  addEmployeeMook(newEmployee : CreateEmployee){
    const id = this.EmployeeArray.length + 1;
    const name = newEmployee.name;
    const country = newEmployee.country;

    this.EmployeeArray.push({id, name, country})

    console.log(this.EmployeeArray)
  }
}
