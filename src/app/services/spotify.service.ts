import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) { 
    console.log('Servicio de Spotify listo');
  }

  artistas: any[] = [];

  getArtistas(termino: string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQDSR7AyiPA4zxKq4Q21_DPukPcup9yUxi8MoDXUe2qMt3naIiCY8WBRv7oGUMCWtmgkw94qjimzPzr1uEQ'
    });

    return this.http.get(url, {headers})
                .map( (resp: any) => {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                });

  }

}
