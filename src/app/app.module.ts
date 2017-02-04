import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { MdDialogModule } from '@angular/material';

import { LoginService } from './login.service';
import { AdminService } from './admin.service';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';

import { AppComponent } from './app.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { MenuComponent } from './menu/menu.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GuardedComponent } from './guarded/guarded.component';
import { FooterComponent } from './footer/footer.component';
import { ManageAdminAccessComponent } from './dialogs/manage-admin-access/manage-admin-access.component';
import { DynamicDialogComponent } from './dialogs/dynamic-dialog/dynamic-dialog.component';

export const firebaseConfig = {
      apiKey: "AIzaSyBa1NobiJohnNG6LnsTTkYUts5HqAnBA_8",
      authDomain: "whatsup-c2af3.firebaseapp.com",
      databaseURL: "https://whatsup-c2af3.firebaseio.com/",
      storageBucket: ""
};
export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}
@NgModule({
  declarations: [
    AppComponent,
    AccountDisplayComponent,
    MenuComponent,
    HomeScreenComponent,
    GuardedComponent,
    FooterComponent,
    ManageAdminAccessComponent,
    DynamicDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),
    MdDialogModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ AdminService, DataService, DialogService, LoginService, appRoutingProviders ],
  bootstrap: [AppComponent],
  entryComponents:[
    ManageAdminAccessComponent,
    DynamicDialogComponent
  ]
})
export class AppModule { }
