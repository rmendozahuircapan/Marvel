import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelApiProvider } from '../../providers/marvel-api/marvel-api';
import { Http } from '@angular/http';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private comics: any[] = [];
  private Comics: any[] = [];

  constructor(
    public navCtrl: NavController,
    public marvelApiProvider: MarvelApiProvider,
    private http: Http
  ) {
    this.http.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e5bd84c9380ca1e45730934dcbaf2bdb&hash=b983eec0e264f8544553c9a58cb42d43')
    .map(res => res.json()).subscribe(data => {
        this.comics = data.data.results;
        this.initializeItems();
    });
  }

  public ionViewDidLoad(){
    this.marvelApiProvider.getComics()
    .then(data => {
      this.comics = data.data.results;
    })
    .catch(error =>{
      console.error(error);
    })
  }

  public detail(comic){
    this.navCtrl.push(DetailsPage, { comic : comic});
  }


  initializeItems() {
    this.Comics = this.comics;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.Comics = this.Comics.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
