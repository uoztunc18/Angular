import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from "./_components/contact-list/contact-list.component";
import {ContactUpdateFormComponent} from "./_components/contact-update-form/contact-update-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'contact-list', pathMatch: 'full'},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact-update/:Id', component: ContactUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
