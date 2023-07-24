import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchRestaurant() {
    this.searchTextChanged.emit(this.searchValue);
  }

  clearSearch() {
    this.searchValue = "";
    this.searchTextChanged.emit(this.searchValue);
  }

}
