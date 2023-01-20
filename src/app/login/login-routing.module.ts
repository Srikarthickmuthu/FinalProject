import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login-path', component: LoginComponent },
  { path: 'sign-up-path', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),AppRoutingModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
