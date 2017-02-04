import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-manage-admin-access',
  templateUrl: './manage-admin-access.component.html',
  styleUrls: ['./manage-admin-access.component.css']
})
export class ManageAdminAccessComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }
  
  addAdmin(name, uid){
    this.adminService.addAdmin(name.value, uid.value);
  }
}
