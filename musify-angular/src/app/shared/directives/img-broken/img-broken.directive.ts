import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const imgElement = this.host.nativeElement;
    imgElement.src = '../../../../favicon.ico'
  }

  constructor(private host: ElementRef) { }

}
