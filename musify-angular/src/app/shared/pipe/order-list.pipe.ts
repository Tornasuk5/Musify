import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    const tmpList = value;
    if (args == null) return value
    else {
      tmpList.sort((a, b) => {
        if (a[args] > b[args]) {
          return 1;
        }
        if (a[args] < b[args]) {
          return -1;
        }
        return 1;
      });
    }
    return sort == 'asc' ? value : tmpList.reverse();
  }

}
