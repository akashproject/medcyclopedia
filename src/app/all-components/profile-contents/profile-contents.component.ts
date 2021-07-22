import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.scss'],
})
export class ProfileContentsComponent implements OnInit {


  f_name : string;
  constructor() { }

  edit_pro: boolean = true;
  save_pro: boolean = false;

  editProButton(){
    this.onTogglenotEditMode();
    // this.edit_pro = false;
    // this.save_pro = true;

    this.edit_pro = !this.edit_pro;
    this.save_pro = !this.save_pro;

    console.log(this.f_name);
  }

  cancleProButton(){
    this.edit_pro = true;
    this.save_pro = false;
  }

  notEditMode = true;
  onTogglenotEditMode() {
    this.notEditMode = !this.notEditMode;
  }
  ngOnInit() {}

}
