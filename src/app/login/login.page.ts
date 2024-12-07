import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  userName: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private router: Router) {}

  goToSurprise() {
    if(this.userName === 'admin' && this.password === 'admin'){
      this.router.navigate(['/surprise'], { queryParams: { name: this.userName } });
  }
    else(
      this.errorMessage = 'Invalid Username or Password'
    )

    }
    
}
