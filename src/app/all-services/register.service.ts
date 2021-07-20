import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(name, mobile, password, email){

    return this.http.post(`${environment.apiUrl}/register`, {name : name, mobile : mobile, password : password, email : email}).subscribe((res) =>
    console.log(res));

  }
}
