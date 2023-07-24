import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { COUNTRY } from '../model/country';
import { SharedService } from '../service/shared.service';
import { COUNTRES1 } from '../model/small';

@Component({
  selector: 'app-smallcities',
  templateUrl: './smallcities.component.html',
  styleUrls: ['./smallcities.component.css']
})
export class SmallcitiesComponent implements OnInit {
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
        this.country = COUNTRES1[index];
      } else {
        // Handle the case where the index is not a number or is undefined
        // For example, you can redirect to a default route or show an error message.
      }
    });

  }
}
