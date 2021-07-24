import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : string;
  pref_timing : string;
  constructor() { }

  ngOnInit() {}

  registerNow(){

    console.log(this.date);
    console.log(this.pref_timing)

    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWVkLnNjcmlwdGNyb3duLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYyNzA3MDIyMywiZXhwIjoxNjI3MDczODIzLCJuYmYiOjE2MjcwNzAyMjMsImp0aSI6IjdyQmVXM1lRSnFUckQybTQiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ITDaK1gxurooQqTAoEVuNs8qA7igNYV5J3plYocoaM4"
  }

}
