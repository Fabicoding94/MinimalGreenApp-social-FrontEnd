import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

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



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        SaveWaterComponent,
        SaveElectricityComponent,
        SaveCO2Component,
        SaveDietComponent
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
        SwiperModule



    ]
})
export class AppModule { }
