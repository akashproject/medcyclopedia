import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/all-services/register.service';
import { SendotpService } from 'src/app/all-services/sendotp.service';
import { UserdetailsService } from 'src/app/all-services/userdetails.service';

@Component({
  selector: 'app-signup-second-page-content',
  templateUrl: './signup-second-page-content.component.html',
  styleUrls: ['./signup-second-page-content.component.scss'],
})
export class SignupSecondPageContentComponent implements OnInit {

  otpForm : FormGroup;

  constructor(private userdetails : UserdetailsService,
              private otp: SendotpService,
              private registerUser : RegisterService,
              private fb: FormBuilder,
              private router : Router) { }

  ngOnInit() {

    console.log(this.userdetails.getMobile());

    this.otp.sendotp(this.userdetails.getMobile());

    this.otpForm = this.fb.group({
      mobile: ['', Validators.required],
      place1: ['', Validators.required],
      place2: ['', Validators.required],
      place3: ['', Validators.required],
      place4: ['', Validators.required],
      place5: ['', Validators.required],
      place6: ['', Validators.required]
    });

    // this.otpForm.forEach((x) => {
      this.otpForm.patchValue({ mobile: this.userdetails.getMobile() })
    // })
  }

  register(){

    console.log(this.userdetails.getName()+ " "+this.userdetails.getMobile()+" "+this.userdetails.getPassword()+" "+this.userdetails.getEmail());

    this.registerUser.registerUser(this.userdetails.getName(), this.userdetails.getMobile(), this.userdetails.getPassword(), this.userdetails.getEmail());

    this.router.navigate(['/home']);
  }

}
