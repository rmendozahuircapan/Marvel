import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarvelApiProvider {

  constructor(public http: Http) {
  }

  getComics() {
    return this.http.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e5bd84c9380ca1e45730934dcbaf2bdb&hash=b983eec0e264f8544553c9a58cb42d43')
    .map(res => res.json())
    .toPromise();
  }

}
