import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DefaultsComponent } from './Defaults/defaults/defaults.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent,children:[{path:'Login',component:LoginComponent}],
},
{
  path:'' ,component:DefaultsComponent,children:[{path:'Home',component:HomeComponent}]
},
{
  path:'',component:DefaultsComponent,children:[{path:'Customers',component:CustomersComponent}]
},
{
  path:'',component:DefaultsComponent,children:[{path:'Suppliers',component:SuppliersComponent}]
},
{
  path:'Default',component:DefaultsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
