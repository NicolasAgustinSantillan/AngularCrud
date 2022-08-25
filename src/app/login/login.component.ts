import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modelUser } from '../DTO/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formUser: FormGroup
  username: string = 'username'
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.route.params)
  }

  buildForm() {
    this.formUser = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    });
  }

  async onLogin(){
    
    await this.authService.login(this.formUser.value).then((res) => {
      console.log(res)
      this.router.navigate(['user-form'])
    }).catch(err => {
      console.log(err)
    })

  }
  N(key: keyof modelUser) {
    return key
  }
}