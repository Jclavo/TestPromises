import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private apiRoot: string = 'https://itunes.apple.com/search'
  private result: any;
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
        res => {

          //console.log(result);
          console.log(JSON.stringify(res));
          this.result = res;
          //console.log(result.json());
        }

      );



    });
    return promise;

  }
}
