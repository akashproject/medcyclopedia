import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {

  user : any;

  constructor(private signinservice : SigninService) { }

  ngOnInit() {

    this.user = this.signinservice.getCurrentUser();
    this.user.subscribe(user =>{
      if (user) {
        console.log("User s this ")
        console.log(user);
      }
      else {
        console.log("empty user", user);
      }
    })
  }



}
