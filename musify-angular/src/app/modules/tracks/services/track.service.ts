import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) {
  }

   getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map((dataRaw: any) => {
        return dataRaw.data;
      }),
      catchError((err) => {
        console.info(`Ha ocurrido un error -> Tipo: ${err.status} | Mensaje: ${err.statusText}`);
        return of([]);
      })
    );
   }
}
