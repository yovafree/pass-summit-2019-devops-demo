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
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DependentsComponent } from './pages/dependents/dependents.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { EmployeesComponent } from './pages/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegionsComponent,
    CountriesComponent,
    LocationsComponent,
    DepartmentsComponent,
    DependentsComponent,
    JobsComponent,
    EmployeesComponent,
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
