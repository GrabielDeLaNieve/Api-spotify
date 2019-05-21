import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Espotify service listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization : 'Bearer BQA8Q3anfhQJWl_hn_dbaNo-207MskKaoejHOBGGmbZni_liINa0DbtFmFNJOcM_QLfP7C5mejeg8On7IDE'
    });

    return this.http.get(url, { headers });
  }

   getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    // tslint:disable-next-line:no-string-literal
    .pipe( map( data =>  data['albums'].items));
   }


   getArtistas( termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
     // tslint:disable-next-line:no-string-literal
        .pipe( map( data =>  data['artists'].items));
   }
}
