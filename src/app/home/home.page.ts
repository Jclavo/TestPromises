import { Component } from '@angular/core';
import { SearchServiceService } from '../services/search-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private valueSearched: string;

  constructor(private searchService: SearchServiceService) { }

  searchSong(form, event) {
    console.log("search: ", form.value.valueSearched);
    this.valueSearched = form.value.valueSearched
    if (this.valueSearched && this.valueSearched.trim() != '') {

      this.searchService.searchSong(this.valueSearched);
      console.log('result',this.searchService.searchSong(this.valueSearched));
    }

  }

}
