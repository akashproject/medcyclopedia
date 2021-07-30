import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/all-services/scholarship.service';

@Component({
  selector: 'app-scholarships-content',
  templateUrl: './scholarships-content.component.html',
  styleUrls: ['./scholarships-content.component.scss'],
})
export class ScholarshipsContentComponent implements OnInit {

  pop:boolean = false;

  scholarships : any = [];
  country_id : string;

  constructor(private scholarshipservice : ScholarshipService) { }

  popOpen(){
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  ngOnInit() {

    this.scholarshipservice.getShcolarships().subscribe(res => {
      console.log(res);

      this.scholarships = res;

    });
  }

}
