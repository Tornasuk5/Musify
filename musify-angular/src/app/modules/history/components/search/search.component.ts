import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'history-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void{
    this.callbackData.emit(term);
  }

}
