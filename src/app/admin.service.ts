import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class AdminService {

  constructor(
      private http : Http,
      private dataService: DataService
  ) { }
  
  addAdmin(name :string, uid: string ){
    const body = JSON.stringify({name: name, uid: uid })
    return this.http.post(this.dataService.baseUrl +"/access/admins.json", body)
               .map((res: Response) => res.json())
               .subscribe(
                err => console.log(err),
                () => console.log("success")
      );
               
  }
}
