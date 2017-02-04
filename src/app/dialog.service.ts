import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ManageAdminAccessComponent } from './dialogs/manage-admin-access/manage-admin-access.component';

@Injectable()
export class DialogService {

  constructor(
      private dialog: MdDialog
  ) { }
  

  openManageAdmin(){
    this.dialog.open(ManageAdminAccessComponent);
  }

}
