import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  playingTrack!: TrackModel;

  listObserver$: Array<Subscription> = [];

  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observerPlayer$ = this.multimediaService.playingStatus$.subscribe(status => this.state = status)

    this.listObserver$.push(observerPlayer$);

  }

  ngOnDestroy(): void {
    this.listObserver$[0].unsubscribe();
  }

}


