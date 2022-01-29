import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { TableComponent } from './table/table.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'editprofile', component:EditProfileComponent},
  {path:'blank', component:BlankPageComponent},
  {path:'404', component:PageNotFoundComponent},
  {path:'tables', component:TableComponent},
  {path:'forms', component:FormsComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
