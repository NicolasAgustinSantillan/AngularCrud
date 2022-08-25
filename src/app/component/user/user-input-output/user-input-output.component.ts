import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user-input-output.component.html',
  styleUrls: ['./user-input-output.component.css']
})
export class UserInputOutputComponent implements OnInit {
  @Input() name : string
  surname : string

  @Output() surnameChangeEventEmiter = new EventEmitter<string>();

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    
  }

  changeSurname(surname : string){
    this.surname = surname
    this.surnameChangeEventEmiter.emit(this.surname);
  }

}
