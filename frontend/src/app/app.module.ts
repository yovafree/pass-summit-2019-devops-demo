import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigModule } from './app-config.module';
import { CountriesComponent } from './pages/countries/countries.component';
import { LocationsComponent } from './pages/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegionsComponent,
    CountriesComponent,
    LocationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
