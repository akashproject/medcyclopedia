import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : string;
  ptiming : string;
  min_date: String = new Date().toISOString();
  today = Date.now();

  constructor() { }

  ngOnInit() {}

  getPrefTiming(event){
    console.log(event);
    console.log(this.today);
  }

  getPreferredMode(event){
    console.log(event);
  }

  getPreferredLanguages(event){
    console.log(event)
  }

  

  registerNow(){

    console.log(this.min_date)
    console.log(this.date);
    console.log(this.ptiming)
  }

}
