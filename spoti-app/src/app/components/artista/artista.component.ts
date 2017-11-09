import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any;

  constructor(private activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { }

  ngOnInit() {
    // Consulta de artista
    this.activatedRoute.params
    .map(parametros => parametros['id'])
    .subscribe(id => {
      console.log(id);
      this._spotifyService.getUnArtista(id)
      .subscribe(data => this.artista = data);
    });

    // Consulta de top tracks
    this.activatedRoute.params
    .map(parametros => parametros['id'])
    .subscribe(id => {
      this._spotifyService.getTop(id)
      .subscribe(data => this.pistas = data);
    });
  }

}
