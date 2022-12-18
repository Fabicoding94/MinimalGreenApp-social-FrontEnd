import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from "./component/home/home.component";
import { SwiperModule } from 'swiper/angular';
import { SaveWaterComponent } from './component/save-water/save-water.component';
import { SaveElectricityComponent } from './component/save-electricity/save-electricity.component';
import { SaveCO2Component } from './component/save-co2/save-co2.component';
import { SaveDietComponent } from './component/save-diet/save-diet.component';
import { SignupComponent } from './component/signup/signup.component';

import { PostComponent } from './main/post/post.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { ForumComponent } from './component/forum/forum.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { PostFormComponent } from './component/post-form/post-form.component';




@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HeaderComponent,
        HomeComponent,
        SaveWaterComponent,
        SaveElectricityComponent,
        SaveCO2Component,
        SaveDietComponent,
        PostComponent,
        ForumComponent,
        ProfileComponent,
        PostFormComponent,


    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatChipsModule,
        MatExpansionModule,


        SwiperModule,






    ]

})
export class AppModule { }

