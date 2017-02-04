import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoggedInGuard } from './login.guard';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GuardedComponent } from './guarded/guarded.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeScreenComponent },
    { path: 'guarded', component: GuardedComponent, canActivate: [ LoggedInGuard ] },
];

export const appRoutingProviders: any[] = [
  LoggedInGuard
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
