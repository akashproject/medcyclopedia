import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursedetailsService } from 'src/app/all-services/coursedetails.service';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { StatesService } from 'src/app/all-services/states.service';

@Component({
  selector: 'app-institutions-form-content',
  templateUrl: './institutions-form-content.component.html',
  styleUrls: ['./institutions-form-content.component.scss'],
})
export class InstitutionsFormContentComponent implements OnInit {

  allStates : any;
  ownership_type : string;
  state_id : string;

  constructor(private stateService : StatesService,
              private coursedetailsservice : CoursedetailsService,
              private findinsttitutesservice : FindinstitutesService,
              private router : Router) { }

  ngOnInit() {

    console.log(this.coursedetailsservice.getCourseId());
    this.stateService.getStates().subscribe(res => {
      console.log(res);
      this.allStates = res;
    })
  }

  getManagement(ownership : string){
    console.log(ownership);
    this.ownership_type = ownership;
  }

  getStateId(id : string){
    console.log(id);
    this.state_id = id;
  }

  findInstitutes(){

    this.findinsttitutesservice.findInstitutes(this.state_id, this.coursedetailsservice.getCourseId(), this.ownership_type);
    this.router.navigate(['/institute-list']);
  }

}
