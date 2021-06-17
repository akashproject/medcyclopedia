import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.scss'],
})
export class ProfileContentsComponent implements OnInit {

  constructor() { }

  edit_pro: boolean = true;
  save_pro: boolean = false;

  editProButton(){
    this.edit_pro = false;
    this.save_pro = true;
  }

  cancleProButton(){
    this.edit_pro = true;
    this.save_pro = false;
  }

  ngOnInit() {}

}
