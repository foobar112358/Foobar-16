import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Users } from './users';

@Injectable()
export class DataService {

  constructor(
      private af: AngularFire
  ) { }

  dynamicDialogMessages: string = "";
  baseUrl: string = 'https://whatsup-c2af3.firebaseio.com/';

  getAdmins(){
    return this.af.database.list('/access/admins');
  }
}
