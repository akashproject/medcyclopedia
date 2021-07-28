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

    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWVkLnNjcmlwdGNyb3duLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYyNzA3MDIyMywiZXhwIjoxNjI3MDczODIzLCJuYmYiOjE2MjcwNzAyMjMsImp0aSI6IjdyQmVXM1lRSnFUckQybTQiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ITDaK1gxurooQqTAoEVuNs8qA7igNYV5J3plYocoaM4"
  }

}
