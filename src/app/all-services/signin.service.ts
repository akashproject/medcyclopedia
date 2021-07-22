import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http : HttpClient) { }

  signinUser(mobile, password){

    return this.http.post(`${environment.apiUrl}/login`, {mobile:mobile,password:password}).subscribe((res) =>
    console.log(res));
  }
}
