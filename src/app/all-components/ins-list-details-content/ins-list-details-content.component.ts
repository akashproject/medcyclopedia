import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';


@Component({
  selector: 'app-ins-list-details-content',
  templateUrl: './ins-list-details-content.component.html',
  styleUrls: ['./ins-list-details-content.component.scss'],
})
export class InsListDetailsContentComponent implements OnInit {

  institute_id : string;
  loc : any;
  institute_detail : any = [];

  constructor(private location:Location,
              private findinstitute : FindinstitutesService) { }

  ngOnInit() {

    this.loc = this.location.getState();

    this.institute_id = this.loc.institute_id;

    this.findinstitute.findInstituteById(this.institute_id).subscribe(res =>{
      console.log(res);
      this.institute_detail = res;
    })

  }

}
