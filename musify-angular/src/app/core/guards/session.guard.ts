import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkSessionCookie();
  }


  checkSessionCookie(): boolean{
    const sessionCookie: boolean = this.cookieService.check('token');

    if (!sessionCookie) this.router.navigate(['/', 'auth']);

    return sessionCookie;
  }
  
}
