import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './component/user-module/user/user.component';
import { LoginModule } from './login/login.module';
import { UserListComponent } from './component/user-module/user-list/user-list.component';
import { ToolbarComponent } from './component-generic/toolbar/toolbar.component';
import { AllUpperCasePipe } from './customPipes/all-upper-case.pipe';
import { UserFormComponent } from './component/user-module/user-form/user-form.component';
import { HttpInterceptorService } from './services/http-interceptor.service';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    ToolbarComponent,
    AllUpperCasePipe,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
