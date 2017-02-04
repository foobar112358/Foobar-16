import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  public isAuthenticated = false;
  public isAdmin = false;
  public displayName: string = '';
  public photoUrl: string = '';

  constructor(
    private af: AngularFire,
    private router: Router
    ) {}


  private storeAuthInfo(authState: FirebaseAuthState): FirebaseAuthState {
    if (authState) {
      this.displayName = authState.auth.displayName;
      this.photoUrl = authState.auth.photoURL;
      this.isAuthenticated = true;
      if (authState.google) {
        console.log(authState.auth.uid);//nota sem id fyrir admins?
        localStorage.setItem('idToken', (authState.google as any).idToken);
        localStorage.setItem('accessToken', (authState.google as any).accessToken);
        if(authState.auth.uid == "Q8OnKwWICEYXqwMofklpKMhMUV13"){
          this.isAdmin = true;
        }
      }
    }
    return authState;
  }

  login(): firebase.Promise<FirebaseAuthState> {

    const idToken = localStorage.getItem('idToken');
    const accessToken = localStorage.getItem('accessToken');

    if (idToken && accessToken) {

      const authConfig = {
        method: AuthMethods.OAuthToken,
        provider: AuthProviders.Google
      };
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      return this.af.auth.login(credential, authConfig).then((authState) => {
        console.log("Successful Token-based Login");
        return this.storeAuthInfo(authState);
      }).catch((err) => {
        console.log("Error with auth token: " + err, " Clearing cached token..");
        localStorage.setItem('idToken', '');
        localStorage.setItem('accessToken', '');
      });
    } else {
      // fall through to popup auth
      return this.af.auth.login({
        method: AuthMethods.Popup
      }).then((authState) => {
        console.log("Successful OAuth-based Login");
        return this.storeAuthInfo(authState);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.displayName = this.photoUrl = '';
    this.af.auth.logout();
    localStorage.setItem('idToken', '');
    localStorage.setItem('accessToken', '');
    this.router.navigate(['/home']);
  }

}