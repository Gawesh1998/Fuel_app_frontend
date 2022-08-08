import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { OrderComponent } from './order/order.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { DispatchComponent } from './dispatch/dispatch.component';
import { AddDispatchComponent } from './add-dispatch/add-dispatch.component';
// import { MyDatePicker } from 'mydatepicker';
import { AddUsersComponent } from './add-users/add-users.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminloginComponent,
    OrderComponent,
    UsersComponent,
    PageNotFoundComponent,
    DispatchComponent,
    AddDispatchComponent,
    AddUsersComponent,
    OrderViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
    // MyDatePicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
