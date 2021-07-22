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

  constructor(private fb: FormBuilder,
              private router : Router,
              private signinuser : SigninService) { }

  ngOnInit() {

    this.signinForm = this.fb.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  signin(){

    this.signinuser.signinUser(this.signinForm.value.mobile, this.signinForm.value.password);

    this.router.navigate(['/home']);
  }

}
