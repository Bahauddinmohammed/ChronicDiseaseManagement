import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent
},
{
  path:'dashboard',
  component:DetailsComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'*',
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
