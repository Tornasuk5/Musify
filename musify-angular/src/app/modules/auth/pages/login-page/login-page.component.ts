import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorLogin: boolean = false;
  userLogin: boolean = true;
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup(
      {
        email: new UntypedFormControl('', [Validators.required, Validators.email]),
        password: new UntypedFormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
      }
    )
  }

  sendLogin(): void {
    let email: string = "tornasuk5@hotmail.com";
    let password: string = "123456";

    if (this.userLogin) {
      email = this.formLogin.value.email;
      password = this.formLogin.value.password;
    }

    this.authService.sendCredentials(email, password)
    .subscribe ({
      next: (response: any) => {
        this.cookie.set('token', response.tokenSession, 4, '/');
        this.router.navigate(['/', 'tracks']);
      },
      error: (e) => this.errorLogin = true
    });
  }

  loginWithoutUser(): void{
    this.userLogin = false;
  }

}


