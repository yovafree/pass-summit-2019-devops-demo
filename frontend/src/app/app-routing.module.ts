import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { LocationsComponent } from './pages/locations/locations.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'regions',
    component: RegionsComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
