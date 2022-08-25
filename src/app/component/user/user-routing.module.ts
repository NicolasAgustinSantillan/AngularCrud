import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuardGuard } from "../../services/login-guard.guard";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user.component";

const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
},{
    path: 'form', component: UserFormComponent,
},{
    path: 'list', component: UserListComponent
},
]
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
    
} 