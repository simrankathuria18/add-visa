import { Injectable } from '@angular/core';
import { COUNTRY } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  countriesShared:COUNTRY[]=[];

  constructor() { }


setCountriesShared(countries:COUNTRY[]){
this.countriesShared=countries;
return false;
}
getCountriesShared(){
 return this.countriesShared;
 }


}
