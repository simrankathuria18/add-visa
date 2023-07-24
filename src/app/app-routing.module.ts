import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ShyngenComponent } from './shyngen/shyngen.component';
import { SmallcitiesComponent } from './smallcities/smallcities.component';


const routes: Routes = [
{ path: 'aboutUs', component: AboutUsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'country/:index', component: CountryDetailsComponent },
{ path: 'schengen/:indexes', component: ShyngenComponent },
{ path: 'small/:indexes', component: SmallcitiesComponent },
{path: '**', component: HomeComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
