import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/all-services/bank.service';

@Component({
  selector: 'app-education-loan-assistance-content',
  templateUrl: './education-loan-assistance-content.component.html',
  styleUrls: ['./education-loan-assistance-content.component.scss'],
})
export class EducationLoanAssistanceContentComponent implements OnInit {

  allBanks : any;
  bankdetails : string;
  constructor(private bakService : BankService) { }

  pop:boolean = false;

  popOpen(bank : any){
    console.log(bank);
    this.bankdetails = bank;
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  ngOnInit() {

    this.bakService.getBanks().subscribe(res =>{
      console.log(res);
      this.allBanks = res;
    })
  }



}
