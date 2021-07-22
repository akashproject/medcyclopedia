import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/all-services/countries.service';

@Component({
  selector: 'app-mbbs-abroad-content',
  templateUrl: './mbbs-abroad-content.component.html',
  styleUrls: ['./mbbs-abroad-content.component.scss'],
})
export class MbbsAbroadContentComponent implements OnInit {

  allCountries : any;

  constructor(private countriesService : CountriesService) { }

  ngOnInit() {

    this.countriesService.getCountries().subscribe(res =>{
      console.log(res);
      this.allCountries = res;
    })
  }

}
