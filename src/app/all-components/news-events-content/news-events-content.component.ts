import { Component, OnInit } from '@angular/core';
import { NewseventService } from 'src/app/all-services/newsevent.service';

@Component({
  selector: 'app-news-events-content',
  templateUrl: './news-events-content.component.html',
  styleUrls: ['./news-events-content.component.scss'],
})
export class NewsEventsContentComponent implements OnInit {


  news_events : any = [];
  constructor(private newseventService  : NewseventService) { }

  ngOnInit() {

    this.newseventService.getNewsEvents().subscribe(res => {
      console.log(res);
      this.news_events = res;
    })
  }

}
