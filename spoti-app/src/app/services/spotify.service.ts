import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  token:string = "Bearer BQAf9L7gCw8JCcehU52DNpiK7bu89Ci4yQb3PAi49XCKRqEWKxJslBTa_VhNHoDDOvCjN6dPWS27TzLjOSm0Hw"

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists/";

  constructor(private http:Http) { }

  getArtista( termino:string ){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = "?q=" + termino + "&type=artist";
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
      .map(
      res =>{
        //console.log(res.json().artists.items);
        this.artistas = res.json().artists.items;
      }
    )
  }

  getUnArtista( id:string ){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let url = this.urlArtista + id;

    return this.http.get(url, { headers })
      .map(
      res =>{
        console.log(res.json());
        return res.json();
      }
    )
  }

  getTop( id:string ){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let url = this.urlArtista + id + "/top-tracks?country=US";

    return this.http.get(url, { headers })
      .map(
      res =>{
        console.log(res.json().tracks);
        return res.json().tracks;
      }
    )
  }

}
