import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
