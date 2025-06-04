import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


const routes: Routes = [
  {path:"",redirectTo:'addContact',pathMatch:'full'},
  {path:'addContact',component:AddContactComponent},
  {path:'showContacts',component:DisplayContactComponent},
  {path:'videos',component:VideoListComponent},
  {path:'video/:id',component:VideoDetailsComponent},
  {path:'**',redirectTo:'addContact',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
