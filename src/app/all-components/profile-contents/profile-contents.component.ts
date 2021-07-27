import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/all-services/profile.service';
import { SigninService } from 'src/app/all-services/signin.service';
import { StatesService } from 'src/app/all-services/states.service';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.scss'],
})
export class ProfileContentsComponent implements OnInit {


  userdata : any;
  fullname:string;
  f_name : string;
  l_name : string;
  mobile : string;
  homestate : string;
  gender : string;
  physical_status : string;
  cast : string;
  city : string;
  email : string;
  neet: String;
  user : any;
  token : string;
  all_states;

  constructor(private profileService : ProfileService,
              private signinService : SigninService,
              private stateservice : StatesService) { }

  edit_pro: boolean = true;
  save_pro: boolean = false;

  editProButton(){


    this.onTogglenotEditMode();
    // this.edit_pro = false;
    // this.save_pro = true;

    this.edit_pro = !this.edit_pro;
    this.save_pro = !this.save_pro;

    console.log(this.f_name+" "+this.l_name+" "+this.mobile+" "+this.homestate+" "+this.gender+" "+this.cast+" "+this.city+" "+this.email+" "+this.neet);
    
  }

  cancleProButton(){
    this.edit_pro = true;
    this.save_pro = false;
  }

  notEditMode = true;
  onTogglenotEditMode() {
    this.notEditMode = !this.notEditMode;
  }
  ngOnInit() {

    this.user = this.signinService.getCurrentUser();
    this.user.subscribe(user =>{
      if (user) {
        console.log("User s this ")
        console.log(user);
        this.token = user.access_token;
      }
      else {
        console.log("empty user", user);
      }
    })

    console.log("The token in profile is " +this.token);

    this.profileService.getProfileData(this.token)
    .subscribe(res =>{
      console.log(res);
      
      this.userdata = res;
      console.log(this.userdata.name);
      this.fullname = this.userdata.name;
      this.f_name = this.fullname.split(" ")[0];

      console.log(this.f_name);
      this.l_name = this.fullname.split(" ")[1];
      this.mobile = this.userdata.mobile;
      this.homestate = this.userdata.homestate;
      this.gender = this.userdata.gender;
      this.cast = this.userdata.cast;
      this.city = this.userdata.city;
      this.physical_status = this.userdata.physical_status;
      this.email = this.userdata.email;
      this.neet = this.userdata.score;
    });
    
    this.stateservice.getStates().subscribe((data) => {
      console.log(data);
      this.all_states = data;
    })



  }

  save(){

    console.log(this.homestate);

    this.fullname = this.f_name+" "+this.l_name;
    this.signinService.updateUser(this.fullname, this.mobile, this.homestate, this.gender, this.cast, this.city, this.physical_status, this.email, this.neet, this.token);

    this.editProButton();
    }

}
