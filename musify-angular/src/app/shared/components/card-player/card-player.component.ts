import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big'  = 'small';
  
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    cover: '',
    artist: {name: '', nickname: '', nationality: ''},
    duration: "0:00",
    url: ''
  }

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  playTrack(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track);
  }

}