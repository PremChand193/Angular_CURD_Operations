import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee',loadChildren:()=>import("./employee/employee.module").then(x=>x.EmployeeModule)},
  {path:'customer',loadChildren:()=>import("./customer/customer.module").then(x=>x.CustomerModule)},
  {path:'posts',loadChildren:()=>import("./posts/posts.module").then(x=>x.PostsModule)},
  {path:'Login',loadChildren:()=>import("./login/login.module").then(x=>x.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
