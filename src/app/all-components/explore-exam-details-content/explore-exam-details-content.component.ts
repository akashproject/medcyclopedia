import { Component, OnInit } from '@angular/core';
import { CoursedetailsService } from 'src/app/all-services/coursedetails.service';
import { ExamsService } from 'src/app/all-services/exams.service';

@Component({
  selector: 'app-explore-exam-details-content',
  templateUrl: './explore-exam-details-content.component.html',
  styleUrls: ['./explore-exam-details-content.component.scss'],
})
export class ExploreExamDetailsContentComponent implements OnInit {

  allExams : any;

  constructor(private coursedetailsservice : CoursedetailsService,
              private examService : ExamsService) { }

  ngOnInit() {
    console.log(this.coursedetailsservice.getCourseId());
    this.examService.getExamsById(this.coursedetailsservice.getCourseId()).subscribe(res =>{
      console.log(res);
      this.allExams = res;
    })
  }

}
