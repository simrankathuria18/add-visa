import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public router:Router){}
goToComponent(name:string){
this.router.navigateByUrl('/'+name);
console.log(name)
}
}
