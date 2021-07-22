import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/all-services/bank.service';

@Component({
  selector: 'app-education-loan-assistance-content',
  templateUrl: './education-loan-assistance-content.component.html',
  styleUrls: ['./education-loan-assistance-content.component.scss'],
})
export class EducationLoanAssistanceContentComponent implements OnInit {

  allBanks : any;
  constructor(private bakService : BankService) { }

  ngOnInit() {

    this.bakService.getBanks().subscribe(res =>{
      console.log(res);
      this.allBanks = res;
    })
  }

}
