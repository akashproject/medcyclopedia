import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  
  menu: boolean = false;
  constructor(private router: Router,
              private signInService : SigninService) { }
  
  menuopen(){
    this.menu = !this.menu;
  }
  menuclose(){
    this.menu = false;
  }

 
  logout() {

    this.signInService.logout();
    this.router.navigate(['/signin']);
  }
  

  ngOnInit() {}

}
