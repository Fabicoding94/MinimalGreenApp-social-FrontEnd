import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './component/forum/forum.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SaveCO2Component } from './component/save-co2/save-co2.component';
import { SaveDietComponent } from './component/save-diet/save-diet.component';
import { SaveElectricityComponent } from './component/save-electricity/save-electricity.component';
import { SaveWaterComponent } from './component/save-water/save-water.component';
import { SignupComponent } from './component/signup/signup.component';
import { PostFormComponent } from './component/post-form/post-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'saveWater', component: SaveWaterComponent },
  { path: 'saveElectricity', component: SaveElectricityComponent },
  { path: 'reduceCO2', component: SaveCO2Component },
  { path: 'sustainableDiet', component: SaveDietComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'postForm', component: PostFormComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
