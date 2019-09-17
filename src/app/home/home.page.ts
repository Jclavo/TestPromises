import { Component } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private searchService: SearchServiceService) {}

  searchSong(event)
  {
    const valueSearched = event.target.value;
    if (valueSearched && valueSearched.trim() != '') {
      
      console.log("search: ", valueSearched );

      this.searchService.searchSong(valueSearched);
    }
  }

}
