import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursedetailsService } from 'src/app/all-services/coursedetails.service';
import { CoursesService } from 'src/app/all-services/courses.service';

@Component({
  selector: 'app-exam-ins-content',
  templateUrl: './exam-ins-content.component.html',
  styleUrls: ['./exam-ins-content.component.scss'],
})
export class ExamInsContentComponent implements OnInit {

  allCourses : any;
  constructor(private courses : CoursesService,
              private router : Router,
              private coursedetailsservice : CoursedetailsService) { }

  ngOnInit() {

    this.courses.getCourses().subscribe(res =>{
      console.log(res);
      this.allCourses = res;
      
    })

    
  }

  getId(id : string){
    console.log(id);
    this.coursedetailsservice.setCourseId(id);
    this.router.navigate(['/find-institutions-form']);
    
  }

}
