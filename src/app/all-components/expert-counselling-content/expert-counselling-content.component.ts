import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : string;
  ptiming : string;
  constructor() { }

  ngOnInit() {}

  getPrefTiming(event){
    console.log(event);
  }

  getPreferredMode(event){
    console.log(event);
  }

  getPreferredLanguages(event){
    console.log(event)
  }

  

  registerNow(){

    console.log(this.date);
    console.log(this.ptiming)
  }

}
