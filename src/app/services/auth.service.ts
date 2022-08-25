import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { modelUser } from '../DTO/user';

export interface Credentials {
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user : modelUser
  constructor(private http : HttpClient) { }

  async login(credentials: Credentials) {
    await this.http.post<{message: string; user: modelUser}>(`${environment.urlBase}/login`, credentials).toPromise().then((res) => {
      console.log(res)
      if (!res || !res.message) {
        return false
      }
      this.user = res.user;
      return true
    })
  }

  isLogin() : boolean {
    return !!this.user
  }
}
