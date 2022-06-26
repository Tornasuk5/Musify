import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  searchTracks$(term: string): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`)
    .pipe(
      map((dataRaw: any) => {
        let allTracks: TrackModel[] = [];
        dataRaw.data.forEach((trackList: TrackModel[]) => {
          trackList.forEach((track: TrackModel) => {
            if (track.name.toLowerCase().includes(term.toLowerCase()) || 
                track.artist?.name.toLowerCase().includes(term.toLowerCase()))
                 allTracks.push(track);
          })
        });
        return allTracks;
      }
      )
    );
  }
}
