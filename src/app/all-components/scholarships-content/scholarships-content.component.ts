import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarships-content',
  templateUrl: './scholarships-content.component.html',
  styleUrls: ['./scholarships-content.component.scss'],
})
export class ScholarshipsContentComponent implements OnInit {

  pop:boolean = false;

  constructor() { }

  popOpen(){
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  ngOnInit() {}

}
