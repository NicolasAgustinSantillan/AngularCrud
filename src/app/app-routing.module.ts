import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './component/user-module/user-form/user-form.component';
import { UserListComponent } from './component/user-module/user-list/user-list.component';
import { UserComponent } from './component/user-module/user/user.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from './services/login-guard.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user-form', component: UserFormComponent, canActivate : [LoginGuardGuard]},
  {path: 'user-list', component: UserListComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
