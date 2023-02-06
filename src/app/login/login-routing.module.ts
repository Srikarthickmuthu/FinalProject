import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccessGuard } from '../Services/Guard/access.guard';
import { AdminGuard } from '../Services/Guard/admin.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login-path', component: LoginComponent , canActivate:[]},
  { path: 'sign-up-path', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
