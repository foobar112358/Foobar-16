import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ManageAdminAccessComponent } from './dialogs/manage-admin-access/manage-admin-access.component';
import { DynamicDialogComponent } from './dialogs/dynamic-dialog/dynamic-dialog.component';

@Injectable()
export class DialogService {

  constructor(
      private dialog: MdDialog
  ) { }
  

  openManageAdmin(){
    this.dialog.open(ManageAdminAccessComponent);
  }

  openDynamic(){
    this.dialog.open(DynamicDialogComponent);
  }

  closeDialogTimeout(){
      setTimeout(() => {
        this.dialog.closeAll();
      }, 1500)
  }
}
