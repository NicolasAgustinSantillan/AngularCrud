import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginModule } from './component/login/login.module';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AllUpperCasePipe } from './customPipes/all-upper-case.pipe';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { UserModule } from './component/user/user.module';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AllUpperCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    UserModule
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
