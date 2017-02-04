import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
      private dialogService: DialogService,
      private loginService: LoginService      
  ) { }

  ngOnInit() {
  }

  openAdmin(){
    this.dialogService.openManageAdmin();
  }

}
