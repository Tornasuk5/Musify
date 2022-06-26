import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@models/tracks.model';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent implements OnInit {

  @Input() title: string = "";
  @Input() mode: 'small' | 'big'  = 'small';
  @Input() dataTracks: Array<TrackModel>  = [];

  constructor() { }

  ngOnInit(): void {
  }

}
