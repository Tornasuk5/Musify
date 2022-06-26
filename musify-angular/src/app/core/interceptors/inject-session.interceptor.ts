import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest: HttpRequest<unknown> = request;
    try {
      const sessionToken = this.cookieService.get('token');
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${sessionToken}`
        }
      });

    } catch (error) {
      console.error(`Error al cargar las canciones -> ${error}`);
    }
    return next.handle(newRequest);
  }
}
