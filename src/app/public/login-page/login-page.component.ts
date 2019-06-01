import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../common-utils/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  loginError: string;

  constructor(private auth: AuthService, private router: Router) { }

  login(form: NgForm) {
    const userName = form.value.username;
    const password = form.value.password;
    this.auth.tryAuthenticate(userName, password).subscribe(() => {
      this.loginError = null;
      this.router.navigate(['/']);
    }, (err: string) => {
      this.loginError = err;
    }, () => {
      form.resetForm();
    });
  }


  ngOnInit() {
  }

}
