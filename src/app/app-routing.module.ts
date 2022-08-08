import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDispatchComponent } from './add-dispatch/add-dispatch.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { LoginComponent } from './login/login.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'oeder', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'users', component: UsersComponent},
  {path: 'dispatch', component: DispatchComponent},
  {path: 'add-dispatch', component: AddDispatchComponent},
  {path: 'add-users', component: AddUsersComponent},
  {path: 'order-view', component: OrderViewComponent},
  {path: '**', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
