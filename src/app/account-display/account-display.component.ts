import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DialogService } from '../dialog.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.css']
})
export class AccountDisplayComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private dialogService: DialogService,
    private datatService: DataService,
    private router: Router
    ) { }
    
  private errorDuringLogin = false;

  ngOnInit() {
  }

  login(){
    if (this.loginService.isAuthenticated) {
      this.router.navigate(['/home']);

    } else {
      this.loginService.login().then((authState) => {
        if (authState && authState.uid) {
          this.datatService.dynamicDialogMessages = "Login successful for " + authState.auth.displayName;
          this.dialogService.openDynamic();
          this.dialogService.closeDialogTimeout();
          this.router.navigate(['/guarded']);
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
