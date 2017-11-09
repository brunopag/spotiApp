import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {}

  buscarArtista(){
    this._spotifyService.getArtista(this.termino)
    .subscribe(
    //   data => {
    //   console.log("Esto es desde el search.component");
    //   console.log(data);
    // }
  );
  }

}
