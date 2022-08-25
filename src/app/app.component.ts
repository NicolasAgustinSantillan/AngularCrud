import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  user : string = 'Hernesto'
  surname : string = 'Manolo'

  onChangeSurname(value : any){
    this.surname = value;
  }
}