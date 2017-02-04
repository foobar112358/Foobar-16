import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { LoginService } from './login.service';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FooterComponent } from './footer/footer.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';



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
    HomeScreenComponent,
    FooterComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ LoginService, appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
