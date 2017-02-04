import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ManageAdminAccessComponent } from './dialogs/manage-admin-access/manage-admin-access.component';
import { DynamicDialogComponent } from './dialogs/dynamic-dialog/dynamic-dialog.component';
import { DataService } from './data.service';

@Injectable()
export class DialogService {

  constructor(
      private dialog: MdDialog,
      private dataService: DataService
  ) { }
  

  openManageAdmin(){
    this.dialog.open(ManageAdminAccessComponent);
  }

  openDynamic(message: string){
    message = this.dataService.dynamicDialogMessages;
    this.dialog.open(DynamicDialogComponent);
  }

  closeDialogTimeout(){
      setTimeout(() => {
        this.dialog.closeAll();
      }, 1500)
  }
}
