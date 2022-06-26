import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  public audio!: HTMLAudioElement;

  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');

  public playingStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');

  public playerPercent$: BehaviorSubject<number> = new BehaviorSubject(0);

  callback: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(response => {
      if (response) this.setAudio(response);
    })

    this.listenAllEvents();
  }

  private listenAllEvents(): void{
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (state: any) => {
    switch(state.type){
      case 'play':
        this.playingStatus$.next('play');

        break;
      case 'playing':
        this.playingStatus$.next('playing');
        break;
      case 'ended':
        this.playingStatus$.next('ended');
        break;
      default:
        this.playingStatus$.next('paused');
    }
  }

  public tooglePlayer(): void{
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setPercent(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((seconds / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);
  }

  public setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  private setPercent(currentTime: number, duration: number): void{
    let percent = (currentTime * 100) / duration;
    this.playerPercent$.next(percent);
  }
}
