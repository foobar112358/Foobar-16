import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.css']
})
export class AccountDisplayComponent implements OnInit {

  constructor(
    private loginService: LoginService, 
    private router: Router
    ) { }
    
  private errorDuringLogin = false;

  ngOnInit() {
  }

  login(){
    console.log("Starting Login Page. Authenticated is: " + this.loginService.isAuthenticated);
    if (this.loginService.isAuthenticated) {
      this.router.navigate(['/home']);

    } else {
      this.loginService.login().then((authState) => {
        if (authState && authState.uid) {
          console.log("Login successful for " + authState.auth.displayName);
          this.router.navigate(['/home']);
        } else {
          this.errorDuringLogin = true;
        }
      })
    };
  }

  logOut(){
    this.loginService.logout();
  }
}
