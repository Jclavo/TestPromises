import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SearchItemModel} from '../models/SearchItem.model';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private apiRoot: string = 'https://itunes.apple.com/search';

  private resultRAW: any;
  public result: Array<SearchItemModel>;
  private loading: boolean;


  constructor(private httpClient : HttpClient) {

    this.result = [];
    this.loading = false;

  }

  searchSong(valueSearched: string) {

    let promise = new Promise((resolve, reject) => {
      
      let apiURL = this.apiRoot + '?term=' + valueSearched + '&media=music&limit=20';

      console.log("apiURL: ", apiURL );

      this.httpClient.get(apiURL).toPromise()
      .then(
        res => { // Success
          
          //console.log(JSON.stringify(res));
          
        

          //this.resultRAW = JSON.stringify(res);
          this.resultRAW = res;

            //console.log('RAW',this.resultRAW);

          this.result = this.resultRAW.results.map( item => {

            return new SearchItemModel(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );

            });
          console.log(this.result);

          resolve();
        },
        msg => { // Error
          reject(msg);
          }

      );



    });
    return promise;

  }
}
