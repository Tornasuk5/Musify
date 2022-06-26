import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})

export class TracksPageComponent implements OnInit, OnDestroy {

  bestList: Array<TrackModel> = [];
  metalList: Array<TrackModel> = [];
  jrockList: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private tracksServices: TrackService) {}

  ngOnInit(): void {
    this.getAllTracks();

  }

  ngOnDestroy(): void {
  }

  getAllTracks(): void{
    this.tracksServices.getAllTracks$().subscribe((sectionsTracks: Array<TrackModel[]>) =>{
      this.bestList = sectionsTracks[0];
      this.metalList = sectionsTracks[1];
      this.jrockList = sectionsTracks[2];
    }); 
  }

}
