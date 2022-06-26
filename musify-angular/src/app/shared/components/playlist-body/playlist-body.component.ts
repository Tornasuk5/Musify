import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@models/tracks.model';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.scss']
})
export class PlaylistBodyComponent implements OnInit {

  @Input() trackList: TrackModel[] = [];

  sortOption: SortOption = {
    prop: null,
    order: 'asc'
  }

  constructor() { }

  ngOnInit(): void {

  }

  changeSort(prop: string): void {
    const { order } = this.sortOption;
    this.sortOption = {
      prop: prop,
      order: order == 'asc' ? 'desc' : 'asc'
    }
  }

}

interface SortOption{
  prop: string | null,
  order: string
}
