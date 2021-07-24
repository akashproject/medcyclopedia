import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-sign-in-content',
  templateUrl: './sign-in-content.component.html',
  styleUrls: ['./sign-in-content.component.scss'],
})
export class SignInContentComponent implements OnInit {

  signinForm : FormGroup;
  token_data : any;
  access_token : string;

  constructor(private fb: FormBuilder,
              private router : Router,
              private signinuser : SigninService) { }

  ngOnInit() {

    this.signinForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      password: ['', Validators.required]
    });

  }

  get errorControl() {
    return this.signinForm.controls;
  }

  signin(){

    this.signinuser.signinUser(this.signinForm.value.mobile, this.signinForm.value.password).subscribe(res => {
      console.log(res);
      this.token_data = res;
      this.access_token = this.token_data.access_token;
      console.log(this.access_token);
      this.signinuser.setToken(this.access_token);

      this.router.navigate(['/home']);
    });

    
    
  }

}
