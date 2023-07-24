import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COUNT } from '../model/SchengenCount';

@Component({
  selector: 'app-shyngen',
  templateUrl: './shyngen.component.html',
  styleUrls: ['./shyngen.component.css']
})
export class ShyngenComponent  implements OnInit {
  country1: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {

    window.scrollTo(0, 0);
   this.route.paramMap.subscribe(params => {
      const indexes = Number(params.get('indexes')); // Convert the index to a number using Number()
      if (!isNaN(indexes)) {
        this.country1 = COUNT[indexes];
      } else {
        // Handle the case where the index is not a number or is undefined
        // For example, you can redirect to a default route or show an error message.
      }
    });
}}
