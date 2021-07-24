import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, switchMap, tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';


const JWT_KEY = 'myjwtstoragekey';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  token : string;

  // private user = new BehaviorSubject(null);
  constructor(private http : HttpClient, 
              // private storage: Storage, private plt: Platform
              ) {
    // this.plt.ready().then(() => {
    //   this.storage.get(JWT_KEY).then(data => {
    //     if (data) {
    //       this.user.next(data);
    //     }
    //   })
    // })
   }

  signinUser(mobile, password) {

    return this.http.post(`${environment.apiUrl}/login`, {mobile:mobile,password:password});
    // .pipe(
    //   switchMap(data => {
    //     return from(this.storage.set(JWT_KEY, data));
    //   }),
    //   tap(data => {
    //     this.user.next(data);
    //   })
    // );
  }

  updateUser(name, mobile, homestate, gender, cast, city, physical_status, email, neet, access_token){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    })

    return this.http.put(`${environment.apiUrl}/updateprofile`,
      {name: name, mobile:mobile, homestate:homestate, gender : gender, cast: cast, city:city, physical_status:physical_status, email:email, score:neet}, {headers: headers}).subscribe(res=>
        console.log(res));

  }

  
  public setToken(token : string) {
    this.token = token;
  }
  
  public getToken() : string {
    return this.token;
  }
  
}
