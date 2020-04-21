import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';


const routes: Routes = [
  {path:"",redirectTo:'addContact',pathMatch:'full'},
  {path:'addContact',component:AddContactComponent},
  {path:'showContacts',component:DisplayContactComponent},
  {path:'**',redirectTo:'addContact',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
