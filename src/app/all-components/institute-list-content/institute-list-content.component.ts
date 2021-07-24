import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-list-content',
  templateUrl: './institute-list-content.component.html',
  styleUrls: ['./institute-list-content.component.scss'],
})
export class InstituteListContentComponent implements OnInit {

  state_id: string;
  course_id : string;
  ownership_type : string;
  loc : any;
  all_institutes : any;
  // institute_id: string;

  constructor(private location:Location,
              private findinsttitutesservice: FindinstitutesService,
              private router : Router) { }

  ngOnInit() {

    this.loc = this.location.getState();
    console.log(this.location.getState());
    this.state_id = this.loc.state_id;
    this.course_id = this.loc.course_id;
    this.ownership_type=this.loc.ownership_type;
    
    this.findinsttitutesservice.findInstitutes(this.state_id, this.course_id, this.ownership_type).subscribe((res) =>{
      console.log(res);
      this.all_institutes = res;
    })


  }

  viewMore(institute_id: string){
    // console.log(event.target)
    console.log(institute_id);
    this.router.navigate(['/institute-list-details'], {state : {institute_id :institute_id}});
  }


}
