import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  //{path: 'user', children : userRoutes, canActivate : [LoginGuardGuard]},
  {path : 'user', loadChildren : () => import('./component/user/user.module').then((module) => module.UserModule)},
  //{path: 'user/:id', component: UserComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
