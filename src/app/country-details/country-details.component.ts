import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { COUNT } from '../model/SchengenCount';
import { SharedService } from '../service/shared.service';
import { COUNTRY } from '../model/country';
import { COUNTRES } from '../model/countries';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: any;
countries:COUNTRY[]=[];
  constructor(private route: ActivatedRoute,
    private shared:SharedService) {}

  ngOnInit() {
    this.countries=this.shared.getCountriesShared();
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('index')); // Convert the index to a number using Number()
      if (!isNaN(index)) {
        this.country = COUNTRES[index];
      } else {
        // Handle the case where the index is not a number or is undefined
        // For example, you can redirect to a default route or show an error message.
      }
    });

  }
}
